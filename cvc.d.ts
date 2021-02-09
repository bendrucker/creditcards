import { CardType } from "./types";

export interface ICvc {
  isValid(cvc: string, type?: string): boolean;
}

declare const Cvc: (data: CardType[]) => ICvc;
export default Cvc;
