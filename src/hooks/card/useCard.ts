import { getCard } from "./api";

export default function useCard(cardId: number) {
  const queryKey = ["card", cardId];

  const queryFn = async () => {
    return getCard(cardId);
  };

  return { queryKey, queryFn };
}
