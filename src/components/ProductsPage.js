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
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      const productOne = await productsAPI({ productid: id });
      setProduct(productOne[0]);
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  if (isLoading || !product.productId) return <Loading />;

  return (
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
  );
};

export default ProductsPage;
