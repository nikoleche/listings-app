import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback) {
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  const updateHandler = (event) => {
    setFormValues((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await submitCallback(formValues);
      setFormValues(initialValues);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { formValues, updateHandler, submitHandler };
}
