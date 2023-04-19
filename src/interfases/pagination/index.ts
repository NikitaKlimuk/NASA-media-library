import { Dispatch, SetStateAction } from "react";

export interface IPagination {
  setCurentPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
  currentPage: number;
  pageSize: string;
  setPageSize: Dispatch<SetStateAction<string>>;
  isLargePagination?: boolean;
}
