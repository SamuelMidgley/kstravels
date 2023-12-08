import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useQuery } from "@tanstack/react-query";
import { getPollOptions } from "../service/poll";

interface IPollOptions {
  pollId: number;
  setSelected: (newSelected: string) => void;
}

export function PollOptions({ pollId, setSelected }: IPollOptions) {
  const {
    isLoading,
    error,
    data: pollOptions,
  } = useQuery({
    queryKey: ["pollOptions"],
    queryFn: () => getPollOptions(pollId),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 3000,
  });

  if (isLoading || error || !pollOptions) {
    return <div className="h-[48px]" />;
  }

  return (
    <RadioGroup className="space-y-2" onValueChange={(e) => setSelected(e)}>
      {pollOptions.map((po) => (
        <div key={po.option_id} className="flex items-center space-x-4">
          <RadioGroupItem
            value={po.option_id.toString()}
            id={po.option_id.toString()}
          />
          <Label htmlFor={po.option_id.toString()}>{po.option}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
