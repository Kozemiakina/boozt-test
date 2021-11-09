import React, { FC, useCallback, useEffect, useMemo, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem, Pagination, Sorting, Loader } from "../../components";
import {
  productsSelector,
  isProductsLoadingSelector,
} from "../../store/selectors";
import { getProducts } from "../../store/actions";
import { TSort } from "../../store/interface";
import { styleNames } from "../../utils";
import styles from "./ProductsPage.scss";

const sn = styleNames(styles);

const ProductsPage: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isProductsLoadingSelector);

  const { data, currentPage, totalDataLength, sort } =
    useSelector(productsSelector);

  const pageParams = useMemo(
    () => ({ count: 10, sort, currentPage }),
    [sort, currentPage]
  );

  const productsList = useMemo(
    () =>
      data.map((product) => <ProductItem key={product.id} product={product} />),
    [data]
  );

  const updateData = useCallback((params) => {
    return dispatch(getProducts(params));
  }, []);

  const setSort = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
      updateData({
        ...pageParams,
        sort: value as TSort,
      }),
    [updateData, pageParams]
  );

  const setPage = useCallback(
    (pageNumber: number) => {
      updateData({
        ...pageParams,
        currentPage: pageNumber,
      });
    },
    [updateData, pageParams]
  );

  useEffect(() => {
    updateData(pageParams);
  }, []);

  return (
    <div className={sn("products wrap")}>
      <h1 className={sn("products__title")}>Our products</h1>
      <div className={sn("products__edit")}>
        <Sorting value={sort} onChange={setSort} />
      </div>
      <div className={sn("products__list")}>
        {loading ? <Loader /> : productsList}
      </div>
      <Pagination
        setPage={setPage}
        currentPage={currentPage}
        count={pageParams.count}
        itemsLength={totalDataLength}
      />
    </div>
  );
};

export default ProductsPage;
