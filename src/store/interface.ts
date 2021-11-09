export interface IProduct {
  [key: string]: string | number;
  actual_price: number;
  base_price: number;
  brand_name: string;
  filename: string;
  id: number;
  product_name: string;
}

export type TSort = "asc" | "desc";

export interface IProducts {
  data: IProduct[];
  currentPage: number;
  totalDataLength: number;
  sort: TSort;
  status: "pending" | "fulfilled";
}

export interface IStore {
  products: IProducts;
}
