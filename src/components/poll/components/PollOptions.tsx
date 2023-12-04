import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useQuery } from "@tanstack/react-query";
import { getPollOptions } from "../service/poll";

interface IPollOptions {
  setSelected: (newSelected: string) => void;
}

export function PollOptions({ setSelected }: IPollOptions) {
  const {
    isLoading,
    error,
    data: pollOptions,
  } = useQuery({ queryKey: ["pollOptions"], queryFn: getPollOptions });

  if (isLoading || error || !pollOptions) {
    return <div className="h-[48px]" />;
  }

  return (
    <RadioGroup className="space-y-2" onValueChange={(e) => setSelected(e)}>
      {pollOptions.map((po, index) => (
        <div key={index} className="flex items-center space-x-4">
          <RadioGroupItem value={po} id={`r${index}`} />
          <Label htmlFor={`r${index}`}>{po}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
