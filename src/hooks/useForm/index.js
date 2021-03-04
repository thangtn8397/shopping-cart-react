import { useState } from "react";
import { checkValidity } from "../../helper";

export const useForm = (form) => {
  const [formData, setFormData] = useState({
    formDetail: form,
    formValid: false,
  });
  const formElementsArray = [];

  for (let key in formData.formDetail) {
    formElementsArray.push({
      id: key,
      config: formData.formDetail[key],
    });
  }

  const inputChangedHandler = (event, inputIndentifier) => {
    const updateForm = {
      ...formData.formDetail,
    };
    const updatedFormElement = {
      ...updateForm[inputIndentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    updateForm[inputIndentifier] = updatedFormElement;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.rules
    );

    let isFormValid = true;
    for (let key in updateForm) {
      isFormValid = updateForm[key].valid && isFormValid;
    }
    setFormData({ formDetail: updateForm, formValid: isFormValid });
  };

  return { formElementsArray, inputChangedHandler, formData };
};
