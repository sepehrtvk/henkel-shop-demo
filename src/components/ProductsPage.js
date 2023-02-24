import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Api
import { productsAPI } from "../services/api";

//Components
import BreadCrumb from "./product/BreadCrumb";
import ProductDetails from "./product/ProductDetails";
import ProductInfo from "./product/ProductInfo";
import Comments from "./product/Comments";
import Loading from "./shared/Loading";
import RelatedProduct from "./product/RelatedProduct";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await productsAPI());
    };
    fetchAPI();
  }, []);

  const id = useParams().id;
  const product = products.filter((product) => product.productId == id)[0];
  // const relatedPro = products.filter(
  //   (item) => item.category === product.category && item.id !== product.id
  // );
  return product ? (
    <div className='products-page'>
      <div className='container'>
        <BreadCrumb
          type={product.name}
          category={product.name}
          title={product.name}
        />
        <ProductDetails data={product} />
        <ProductInfo product={product} />
        {/* <Comments /> */}
        {/* <RelatedProduct data={relatedPro} /> */}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProductsPage;
