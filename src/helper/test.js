let newProducts = [];
const shopFilterProducts = (state) => {
  if (state.sortBy === "date") {
    newProducts = newProducts.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
  }
  if (state.sortBy === "price") {
    newProducts = newProducts.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  }
  if (state.sortBy === "sells") {
    newProducts = newProducts.sort(
      (a, b) => parseFloat(b.sells) - parseFloat(a.sells)
    );
  }
  if (state.search) {
    newProducts = newProducts.filter((product) => product.title.includes(search));
  }
  if (state.category) {
    newProducts = newProducts.filter(
      (product) => product.category === state.category
    );
  }
  if (state.fromPrice || state.toPrice) {
    newProducts = newProducts.filter(
      (product) =>
        product.price <= state.toPrice && newProducts.price >= state.fromPrice
    );
  }
};
