export const ValidationTypes = {
    REQUIRED: 'required',
    IS_EMAIL: 'isEmail',
    IS_VALID_PASSWORD: 'isValidPassword',
    REPEAT_PASSWORD: 'repeatPassword',
}

const Validation = {
    isEmail: (email) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    },
    isValidPassword: (password) => {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,16}$/
        return regex.test(password);
    },
}

export default Validation;