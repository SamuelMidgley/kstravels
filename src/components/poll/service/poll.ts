import { IPollDetails } from "../types/PollDetails";
import { IPollResult } from "../types/PollResult";
import { PollVote } from "../types/PollVote";

function delayMockResponse<T>(ms: number, value: T): Promise<T> {
    return new Promise(resolve => setTimeout(resolve, ms, value));
}

export function getPollDetails(): Promise<IPollDetails> {
    return delayMockResponse(300, {
        question: "Who is the better sand boarder?",
        numVotes: 10
    })
}

export function getPollOptions(): Promise<string[]> {
    return delayMockResponse(300, ["Sam", "Kiara"])
}

export function getPollResults(): Promise<IPollResult[]> {
    return delayMockResponse(300, [
        {
          option: "Sam",
          count: 8,
        },
        {
          option: "Kiara",
          count: 2,
        },
      ])
}

export function submitPollVote(pollVote: PollVote): Promise<boolean> {
    console.log(pollVote)

    return delayMockResponse(300, true)
}