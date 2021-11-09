import { combineReducers } from "redux";
import { IStore } from "../interface";
import productsReducer from "./products.reducer";

const rootReducer = combineReducers<IStore>({
  products: productsReducer,
});

export default rootReducer;
