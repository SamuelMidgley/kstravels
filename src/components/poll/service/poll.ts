import axios from "axios";
import { IPollDetails } from "../types/PollDetails";
import { IPollResult } from "../types/PollResult";
import { PollVote } from "../types/PollVote";
import { IPollOption } from "../types/PollOption";

const use_mocks = false;

function delayMockResponse<T>(ms: number, value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, ms, value));
}

export async function getPollDetails(pollId: number): Promise<IPollDetails> {
  if (use_mocks) {
    return delayMockResponse(300, {
      question: "Who is the better sand boarder?",
      num_votes: 10,
    });
  }

  return (
    await axios.get<IPollDetails>(
      `${import.meta.env.VITE_POLL_URL}/poll/${pollId}`
    )
  ).data;
}

export async function getPollOptions(pollId: number): Promise<IPollOption[]> {
  if (use_mocks) {
    return delayMockResponse(300, [
      {
        option_id: 1,
        poll_id: 1,
        option: "Sam",
      },
      {
        option_id: 2,
        poll_id: 1,
        option: "Kiara",
      },
    ]);
  }

  return (
    await axios.get<IPollOption[]>(
      `${import.meta.env.VITE_POLL_URL}/poll/${pollId}/options`
    )
  ).data;
}

export async function getPollResults(pollId: number): Promise<IPollResult[]> {
  if (use_mocks) {
    return delayMockResponse(300, [
      {
        option_id: 1,
        option: "Sam",
        count: 8,
      },
      {
        option_id: 2,
        option: "Kiara",
        count: 2,
      },
    ]);
  }

  return (
    await axios.get<IPollResult[]>(
      `${import.meta.env.VITE_POLL_URL}/poll/${pollId}/results`
    )
  ).data;
}

export function submitPollVote({
  pollId,
  optionId,
  date,
}: PollVote): Promise<boolean> {
  if (use_mocks) {
    return delayMockResponse(300, true);
  }

  return axios.post(`${import.meta.env.VITE_POLL_URL}/poll/${pollId}/vote`, {
    option_id: optionId,
    date,
  });
}
