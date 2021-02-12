interface BaseCard {
  luhn: boolean;
  digits: number | number[];
  cvcLength: number;
  groupPattern: RegExp;
  group(number: string): string[];
  test(number: string, eager: boolean): boolean;
}

interface CardData {
  name: string;
  pattern: RegExp;
  eagerPattern: RegExp;
}

export type CardType = BaseCard & CardData;

interface ICardTypes {
  find: (
    callback: (element: CardType, index: number, array: CardType[]) => void
  ) => CardType | undefined;
  some: (
    callback: (element: CardType, index: number, array: CardType[]) => void
  ) => boolean;
  get: (name: string) => CardType;
}

declare const CardTypes: (types: CardType[]) => ICardTypes;
export default CardTypes;
export const defaults: CardType[];
