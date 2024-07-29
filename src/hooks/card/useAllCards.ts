import { getAllCards } from "./api";

export default function useAllCards() {
  const queryKey = ["allCards"];
  const queryFn = async () => getAllCards();
  return { queryKey, queryFn };
}
