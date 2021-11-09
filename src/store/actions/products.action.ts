import { createAction } from "redux-actions";
import { Dispatch } from "redux";
import data from "../../data/product_list.json";
import { IProduct, TSort } from "../interface";
import { productsComparator } from "../../utils";

export const getProductsAction = createAction("GET_PRODUCTS");

const sortingCash: { [key: string]: IProduct[] } = {};

interface IGetProducts {
  currentPage: number;
  count: number;
  sort: TSort;
}

export const getProducts =
  ({ currentPage, count, sort }: IGetProducts) =>
  async (dispatch: Dispatch) => {
    dispatch(
      getProductsAction({
        data: [],
        currentPage,
        sort,
        totalDataLength: 0,
        status: "pending",
      })
    );

    await setTimeout(() => {
      const sortedData = sortingCash[sort]
        ? sortingCash[sort]
        : (data as unknown as IProduct[]).sort(
            productsComparator[sort]("actual_price")
          );

      dispatch(
        getProductsAction({
          data: sortedData.slice(
            currentPage === 1 ? 0 : currentPage * count - count,
            currentPage * count
          ),
          currentPage,
          sort,
          totalDataLength: data.length,
          status: "fulfilled",
        })
      );
    }, 2000);
  };
