import { CardType } from "./types";

export interface ICard {
  types: CardType[];
  parse(number: string): string;
  format(number: string, separator?: string): string;
  type(number: string, eager?: boolean): string | undefined;
  luhn(number: string): boolean;
  isValid(number: string, type?: string): boolean;
}

declare const Card: (data: CardType[]) => ICard;

export default Card;
