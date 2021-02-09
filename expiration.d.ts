interface IExpiration {
  isPast(month: number, year: number): boolean;
  month: {
    parse(month: string | number): number;
    isValid(month: number): boolean;
  };
  year: {
    parse(year: string | number, expand?: boolean): number;
    format(year: number, strip?: boolean): string;
    isValid(year: number): boolean;
    isPast(year: number): boolean;
  };
}

export const isPast: IExpiration["isPast"];
export const month: IExpiration["month"];
export const year: IExpiration["year"];
