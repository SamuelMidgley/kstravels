import { useQuery } from "@tanstack/react-query";
import { getPollResults } from "../service/poll";
import { CheckIcon } from "@radix-ui/react-icons";

interface IPollResults {
  question: string;
  numVotes: number;
}

function getPercent(value: number, total: number) {
  const percentValue = Math.round((value / total) * 100);
  return `${percentValue}%`;
}

export function PollResults({ numVotes, question }: IPollResults) {
  const userVoted = window.localStorage.getItem(question);

  const {
    isLoading,
    error,
    data: pollResults,
  } = useQuery({ queryKey: ["pollResults"], queryFn: getPollResults });

  if (isLoading || error || !pollResults) {
    return <div className="h-[48px]" />;
  }

  return (
    <div>
      {pollResults.map((pr, index) => (
        <div key={index} className="flex items-center gap-4 mb-4 last:mb-0">
          <div>{getPercent(pr.count, numVotes)}</div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-2">
              {pr.option}
              {userVoted && userVoted === pr.option && (
                <div className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow">
                  <CheckIcon className="h-3.5 w-3.5 fill-primary" />
                </div>
              )}
            </div>
            <div
              className={`h-2 rounded-full`}
              style={{
                width: `${getPercent(pr.count, numVotes)}`,
                backgroundColor: "hsl(var(--card-foreground))",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
