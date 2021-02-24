export const authFormConfig = {
  email: {
    elementType: "input",
    label: "Email",
    elementConfig: {
      type: "text",
    },
    value: "",
    valid: false,
    touched: false,
    rules: {
      required: true,
      isEmail: true,
    },
  },
  password: {
    elementType: "input",
    label: "Password",
    elementConfig: {
      type: "password",
    },
    value: "",
    valid: false,
    touched: false,
    rules: {
      required: true,
      minLength: 6,
    },
  },
};
