import React from "react";
import Input from "../../../UI/Input";
import { useForm } from "../../../../hooks/useForm";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const UserInfoItem = ({ id, title, form, show, clickedTitleHandler }) => {
  const { formElementsArray, inputChangedHandler, formData } = useForm(form);
  return (
    <div className="useInfoItem">
      <h3 className="userInfoItem__title" onClick={clickedTitleHandler}>
        <div>
          <span>{id}. </span>
          {title}
        </div>
        <ArrowDropDownIcon />
      </h3>
      <div
        className={
          show === id ? "userInfoItem__content show" : "userInfoItem__content"
        }
      >
        <h4>Your personal details</h4>
        {formElementsArray.map((element) => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            label={element.config.label}
            touched={element.config.touched}
            shouldValidate={element.config.rules}
            invalid={!element.config.valid}
            onChanged={(event) => inputChangedHandler(event, element.id)}
          />
        ))}
        <button>Update</button>
      </div>
    </div>
  );
};

export default UserInfoItem;
