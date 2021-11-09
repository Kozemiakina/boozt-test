import { handleActions } from "redux-actions";
import { getProductsAction } from "../actions";
import { IProducts } from "../interface";

const initialState: IProducts = {
  data: [],
  currentPage: 1,
  totalDataLength: 1,
  sort: "asc",
  status: "pending",
};

const productsReducer = handleActions(
  {
    [`${getProductsAction}`]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default productsReducer;
