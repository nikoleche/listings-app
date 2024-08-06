import { useState } from "react";

export function useForm(initialValues, submitCallback) {
  const [formValues, setFormValues] = useState(initialValues);
  console.log(formValues);

  const updateHandler = (event) => {
    setFormValues((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    submitCallback(formValues);
  };
  return { formValues, updateHandler, submitHandler };
}
