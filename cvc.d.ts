import { CardType } from "./types.js";

export interface ICvc {
  isValid(cvc: string, type?: string): boolean;
}

declare const Cvc: (data: CardType[]) => ICvc;
export default Cvc;
