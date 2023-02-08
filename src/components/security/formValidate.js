const validate = (data , type) => {
    const errors = {};

    if(!data.email){
        errors.email = "ایمیل ضروری است";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "ایمیل صحیح نیست";
    } else {
        delete errors.email;
    }
    if(!data.password) {
        errors.password = "رمزعبور ضروری است";
    } else if(data.password.length < 8) {
        errors.password = "رمز عبور حداقل باید 8 کاراکتر و بیشتر باشد";
    } else {
        delete errors.password;
    }

    if (type==="signup") {
        if(!data.name.trim()) {
            errors.name = "نام و نام خانوادگی ضروری است";
        }else {
            delete errors.name;
        }
        if(!data.confirmPassword) {
            errors.confirmPassword = "تکرار رمزعبور ضروری است";
        } else if(data.confirmPassword !== data.password) {
            errors.confirmPassword = "رمزعبور متفاوت است";
        } else {
            delete errors.confirmPassword;
        }
        if(data.isAccepted) {
            delete errors.isAccepted;
        } else {
            errors.isAccepted = "لطفا تیک قوانین و مقررات را بزنید";
        }
    }

    return errors;
}

export default validate;