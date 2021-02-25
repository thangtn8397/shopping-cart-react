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

export const userInfoAccount = {
  firstName: {
    elementType: "input",
    label: "First Name",
    elementConfig: {
      type: "text",
    },
    value: "",
    valid: false,
    touched: false,
    rules: {},
  },
  lastName: {
    elementType: "input",
    label: "Last Name",
    elementConfig: {
      type: "text",
    },
    value: "",
    valid: false,
    touched: false,
    rules: {},
  },
  phoneNumber: {
    elementType: "input",
    label: "Phone number",
    elementConfig: {
      type: "text",
    },
    value: "",
    valid: false,
    touched: false,
    rules: {
      isNumeric: true,
      minLength: 10,
      maxLength: 10,
    },
  },
};

export const updatePasswordForm = {
  password: {
    elementType: "input",
    label: "Password",
    elementConfig: {
      type: "text",
    },
    value: "",
    valid: false,
    touched: false,
    rules: {
      minLength: 6,
    },
  },
  passwordConfirm: {
    elementType: "input",
    label: "Password confirm",
    elementConfig: {
      type: "text",
    },
    value: "",
    valid: false,
    touched: false,
    rules: {
      minLength: 6,
    },
  },
};
