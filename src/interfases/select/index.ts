import { UseFormRegister } from "react-hook-form";

export interface IOption {
  readonly value: string;
  readonly label: string;
}

export interface ISelect {
  options: IOption[];
  title: string;
  readonly register: UseFormRegister<any>;
  readonly name: string;
}
