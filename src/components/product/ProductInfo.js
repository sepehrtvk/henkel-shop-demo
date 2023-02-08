import React from "react";

//Styles
import styles from "./ProductInfo.module.css";

const ProductInfo = ({ product }) => {
  return (
    <div className={styles.productInfo}>
      <h3>جزییات کالا :</h3>
      <table className={styles.tableinfo}>
        <tbody>
          <tr>
            <td>کد کالا :</td>
            <td>{product.code}</td>
          </tr>
          <tr>
            <td>برند :</td>
            <td>{product.brandName}</td>
          </tr>
          <tr>
            <td>گروه کالا :</td>
            <td>{product.productGroupPathName}</td>
          </tr>
          <tr>
            <td>واحد فروش :</td>
            <td>{product.unitName}</td>
          </tr>
          <tr>
            <td>حجم کوچکترین واحد :</td>
            <td>{product.volume ? product.volume : "---"}</td>
          </tr>
          <tr>
            <td>وزن کوچکترین واحد :</td>
            <td>{product.weight}</td>
          </tr>
          <tr>
            <td>تولید کننده :</td>
            <td>{product.manufacturerName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductInfo;
