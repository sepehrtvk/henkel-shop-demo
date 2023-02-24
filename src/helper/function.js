import { toast } from "react-toastify";

const quantityItem = (state, id) => {
  const indexItem = state.selectedItem.findIndex(
    (item) => item.product.productId === id
  );
  if (indexItem === -1) {
    return 0;
  } else {
    return state.selectedItem[indexItem].qty;
  }
};

const isInCart = (state, id) => {
  const result = !!state.selectedItem.find(
    (item) => item.product.productId === id
  );
  return result;
};

const discountHandler = (discount, price) => {
  const decimal = discount / 100;
  const discountNum = decimal * price;
  const newPrice = price - discountNum;
  return newPrice;
};

const rateHandler = (rateCount) => {
  for (let i = 0; i < rateCount; i++) {
    const rateX = (rateCount / 5) * 100;
    const rateY = `${(rateX / 10) * 10}%`;
    return rateY;
  }
};

const notify = (type, data) => {
  if (type === "seccus") {
    toast.success("شما با موفیقت وارد شدید", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "checkout") {
    toast.success("خرید با موفقیت انجام شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(data ? data : "ورود شما ناموفق بود لطفا دوباره تلاش کنید", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export { quantityItem, isInCart, discountHandler, rateHandler, notify };
