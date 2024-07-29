import { deleteCard } from "./api";

export default function useDeleteCard(cardId: number) {
  const mutationKey = ["deleteCard", cardId];
  const mutationFn = async () => deleteCard(cardId);
  return { mutationKey, mutationFn };
}
