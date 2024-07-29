import { fetchWrapper } from "../fetchWrapper";

const API_END_POINT = "cards";

export async function getCard(cardId: number) {
  return fetchWrapper(`https://api.github.com/users/Paulorrf`, {
    method: "GET",
  });
}

export async function getAllCards() {
  return fetchWrapper(`${API_END_POINT}`, {
    method: "GET",
  });
}

export async function createCard(cardData: any) {
  return fetchWrapper(`${API_END_POINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardData),
  });
}

export async function updateCard(cardId: number, cardData: any) {
  return fetchWrapper(`${API_END_POINT}/${cardId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardData),
  });
}

export async function deleteCard(cardId: number) {
  return fetchWrapper(`${API_END_POINT}/${cardId}`, {
    method: "DELETE",
  });
}
