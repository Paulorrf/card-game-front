type CardType = {
  id: number;
  name: String;
};

type CardSubType = {
  id: number;
  name: String;
};

export type Card = {
  title: String;
  image: String;
  description: String;
  cardType: CardType;
  cardSubType: CardSubType;
};
