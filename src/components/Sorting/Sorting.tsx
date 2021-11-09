import React, { FC, ChangeEvent } from "react";
import { styleNames } from "../../utils";
import styles from "./Sorting.scss";

const sn = styleNames(styles);

const sortingOptions = [
  {
    optionName: "Price: Low to high",
    optionValue: "asc",
  },
  {
    optionName: "Price: High to low",
    optionValue: "desc",
  },
];

interface ISorting {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Sorting: FC<ISorting> = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className={sn("sorting")}>
      {sortingOptions.map(({ optionName, optionValue }) => (
        <option key={optionValue} value={optionValue}>
          {optionName}
        </option>
      ))}
    </select>
  );
};

export default Sorting;
