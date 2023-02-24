const validate = (data, type) => {
  const errors = {};

  if (!data.phone) {
    errors.phone = "شماره تلفن ضروری است";
  } else if (!/^0\d{10}/.test(data.phone)) {
    errors.phone = "شماره تلفن صحیح نیست";
  } else {
    delete errors.phone;
  }
  if (!data.password) {
    errors.password = "رمزعبور ضروری است";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "نام و نام خانوادگی ضروری است";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "تکرار رمزعبور ضروری است";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "رمزعبور متفاوت است";
    } else {
      delete errors.confirmPassword;
    }
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "لطفا تیک قوانین و مقررات را بزنید";
    }
  }

  return errors;
};

export default validate;
