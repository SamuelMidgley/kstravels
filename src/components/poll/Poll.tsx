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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPollDetails, submitPollVote } from "./service/poll";

interface IPoll {
  className?: string;
  pollId: number;
}

export function Poll({ className, pollId }: IPoll) {
  const [selected, setSelected] = useState("");
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: pollDetails,
  } = useQuery({
    queryKey: ["pollDetails"],
    queryFn: () => getPollDetails(pollId),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 3000,
  });

  const { isPending, isSuccess, mutate } = useMutation({
    mutationFn: submitPollVote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pollDetails"] });
    },
    retry: 1,
    retryDelay: 3000,
  });

  if (isLoading)
    return (
      <Card
        className={`h-[198px] flex items-center justify-center ${className}`}
      >
        <CardContent>Poll loading...</CardContent>
      </Card>
    );

  if (error || !pollDetails)
    return (
      <Card
        className={`h-[198px] flex items-center justify-center ${className}`}
      >
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

  const hasVoted = window.localStorage.getItem(`poll-${pollId}`) || isSuccess;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{pollDetails.question}</CardTitle>
      </CardHeader>
      <CardContent>
        {hasVoted ? (
          <PollResults pollId={pollId} />
        ) : (
          <PollOptions pollId={pollId} setSelected={setSelected} />
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="!m-0">{pollDetails.num_votes} votes</p>
        {!hasVoted && (
          <Button
            onClick={() => {
              window.localStorage.setItem(`poll-${pollId}`, selected);
              // Should do date on worker not here
              mutate({
                pollId: pollId,
                optionId: selected,
                date: new Date().toUTCString(),
              });
            }}
          >
            Vote
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
