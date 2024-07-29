import { Card } from "@/app/cards/models";
import { updateCard } from "./api";

export default function useUpdateCard(cardId: number, cardData: Card) {
  const mutationKey = ["updateCard", cardId];
  const mutationFn = async () => updateCard(cardId, cardData);
  return { mutationKey, mutationFn };
}
