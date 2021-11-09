import React, { FC } from "react";
import { IProduct } from "../../store/interface";
import { styleNames, priceToText } from "../../utils";
import styles from "./ProductItem.scss";

const sn = styleNames(styles);

interface IProductPage {
  product: IProduct;
}

const ProductItem: FC<IProductPage> = ({
  product: { product_name, filename, actual_price, base_price, brand_name },
}) => {
  return (
    <div className={sn("product")}>
      <div className={sn("product__image")}>
        <img alt={product_name} src={filename} />
      </div>
      <div className={sn("product__name")}>
        <strong>{product_name}</strong>
      </div>
      <div className={sn("product__price")}>
        {actual_price !== base_price && (
          <span className={sn("product__price_base")}>
            {priceToText(base_price)}
          </span>
        )}
        <span className={sn("product__price_actual")}>
          <b>{priceToText(actual_price)}</b>
        </span>
      </div>
      <div className={sn("product__brand")}>{brand_name}</div>
    </div>
  );
};

export default ProductItem;
