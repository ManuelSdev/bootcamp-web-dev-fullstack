import React from 'react';

const useForm = initialValue => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = event => {
    setValue(oldValue => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  return [value, handleChange];
};

export default useForm;
