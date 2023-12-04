import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { PollOptions } from "./components/PollOptions";
import { PollResults } from "./components/PollResults";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getPollDetails, submitPollVote } from "./service/poll";

export function Poll() {
  const [selected, setSelected] = useState("");
  const {
    isLoading,
    error,
    data: pollDetails,
  } = useQuery({ queryKey: ["pollDetails"], queryFn: getPollDetails });

  const { isPending, isSuccess, mutate } = useMutation({
    mutationFn: submitPollVote,
  });

  if (isLoading)
    return (
      <Card className="h-[198px] flex items-center justify-center">
        <CardContent>Poll loading...</CardContent>
      </Card>
    );

  if (error || !pollDetails)
    return (
      <Card className="h-[198px] flex items-center justify-center">
        <CardContent>Damn that sucks, something went wrong :(</CardContent>
      </Card>
    );

  if (isPending) {
    return (
      <Card className="h-[198px] flex flex-col">
        <CardHeader className="pb-0">
          <CardTitle>{pollDetails.question}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center pb-0 flex-1">
          Submitting vote...
        </CardContent>
      </Card>
    );
  }

  const hasVoted =
    window.localStorage.getItem(pollDetails.question) || isSuccess;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{pollDetails.question}</CardTitle>
      </CardHeader>
      <CardContent>
        {hasVoted ? (
          <PollResults
            numVotes={pollDetails.numVotes}
            question={pollDetails.question}
          />
        ) : (
          <PollOptions setSelected={setSelected} />
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="!m-0">{pollDetails.numVotes} votes</p>
        {!hasVoted && (
          <Button
            onClick={() => {
              window.localStorage.setItem(pollDetails.question, selected);
              mutate({ vote: selected });
            }}
          >
            Vote
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
