import { ICard } from "./card";
import { ICvc } from "./cvc";
import { IExpiration } from "./expiration";
import { CardType } from "./types";

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
