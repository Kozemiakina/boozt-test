import { createSelector } from "reselect";
import { IStore, IProducts } from "../interface";

export const productsSelector = createSelector(
  ({ products }: IStore): IProducts => products,
  (data) => data
);

export const isProductsLoadingSelector = createSelector(
  ({ products }: IStore): boolean => products.status === "pending",
  (data) => data
);
