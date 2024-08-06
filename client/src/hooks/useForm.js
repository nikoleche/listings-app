import { useState } from "react";

export function useForm(initialValues, submitCallback) {
  const [formValues, setFormValues] = useState(initialValues);

  const updateHandler = (event) => {
    setFormValues((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    submitCallback(formValues);
    setFormValues(initialValues);
  };
  return { formValues, updateHandler, submitHandler };
}
