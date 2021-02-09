export interface CardType {
  name: string;
  digits: number | number[];
  cvcLength: number;
  luhn: boolean;
  pattern: RegExp;
  eagerPatter: RegExp;
  groupPattern: RegExp;
  group(number: string): string[];
  test(number: string, eager: boolean): boolean;
}

interface ICardTypes {
  find: (
    callback: (element: CardType, index: number, array: CardType[]) => void
  ) => undefined | any;
  some: (
    callback: (element: CardType, index: number, array: CardType[]) => void
  ) => boolean;
  get: (name: string) => CardType;
}

declare const CardTypes: (types: CardType[]) => ICardTypes;
export default CardTypes;
export const defaults: CardType[];
