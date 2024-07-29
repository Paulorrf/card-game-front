import { Card } from "@/app/cards/models";
import { createCard } from "./api";

export default function useCreateCard(cardData: Card) {
  const mutationKey = ["createCard"];
  const mutationFn = async () => createCard(cardData);
  return { mutationKey, mutationFn };
}
