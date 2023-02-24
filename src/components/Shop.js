import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Styles
import styles from "./Shop.module.css";

//API
import { productsAPI } from "../services/api";

//Loading
import Loading from "./shared/Loading";

//Components
import ProductCard from "./shared/ProductCard";
import BreadCrumbShop from "./shop/BreadCrumbShop";
import ShopFilter from "./shop/ShopFilter";

const Shop = () => {
  const categoryParams = useParams().category;

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState({
    sortBy: "date",
    search: "",
    category: categoryParams ? categoryParams : "",
    fromPrice: 0,
    toPrice: 999999999,
  });
  let newProducts = products;

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await productsAPI());
    };
    fetchAPI();
  }, []);

  //Filters function
  const shopFilterProducts = (state) => {
    if (state.sortBy === "date") {
      newProducts = newProducts.sort(
        (a, b) => parseFloat(b.date) - parseFloat(a.date)
      );
    }
    if (state.sortBy === "price") {
      newProducts = newProducts.sort(
        (a, b) => parseFloat(a.finalPrice) - parseFloat(b.finalPrice)
      );
    }
    if (state.sortBy === "sells") {
      newProducts = newProducts.sort(
        (a, b) =>
          parseFloat(b.consumerUnitPrice) - parseFloat(a.consumerUnitPrice)
      );
    }
    if (state.search.length) {
      newProducts = newProducts.filter((product) =>
        product.title.includes(state.search)
      );
    }
    if (state.category.length) {
      newProducts = newProducts.filter(
        (product) => product.category === state.category
      );
    }
    if (state.fromPrice.length || state.toPrice.length) {
      newProducts = newProducts.filter(
        (product) =>
          product.price >= state.fromPrice && product.price <= state.toPrice
      );
    }
  };

  shopFilterProducts(filtered);

  const filterHandler = (event) => {
    if (
      event.target.name === "search" ||
      event.target.name === "fromPrice" ||
      event.target.name === "toPrice"
    ) {
      console.log(event);
      setFiltered({ ...filtered, [event.target.name]: event.target.value });
    } else {
      setFiltered({
        ...filtered,
        [event.target.id.split(" ")[0]]: event.target.id.split(" ")[1],
      });
    }
  };

  return (
    <div className='container'>
      <BreadCrumbShop filtered={filtered} filterHandler={filterHandler} />
      <div className={styles.shopPage}>
        <aside className={styles.filterContainer}>
          <div className={styles.fiter}>
            <ShopFilter filtered={filtered} filterHandler={filterHandler} />
          </div>
        </aside>
        <main className={styles.mainContainer}>
          <div className={newProducts.length > 0 ? styles.products : ""}>
            {newProducts.length > 0 ? (
              newProducts.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
