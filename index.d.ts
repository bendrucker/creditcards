import { ICard } from "./card.js";
import { ICvc } from "./cvc.js";
import { IExpiration } from "./expiration.js";
import { CardType } from "./types.js";

export const card: ICard;
export const cvc: ICvc;
export const expiration: IExpiration;

export function withTypes(
  types: CardType[]
): {
  card: ICard;
  cvc: ICvc;
  expiration: IExpiration;
};
