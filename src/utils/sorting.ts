import { IProduct } from "../store/interface";

export const priceASCComparator =
  (field: string) => (a: IProduct, b: IProduct) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (b[field] < a[field]) {
      return 1;
    }
    return 0;
  };

export const priceDESCComparator =
  (field: string) => (a: IProduct, b: IProduct) => {
    if (a[field] < b[field]) {
      return 1;
    }
    if (b[field] < a[field]) {
      return -1;
    }
    return 0;
  };

export const productsComparator = {
  asc: priceASCComparator,
  desc: priceDESCComparator,
};
