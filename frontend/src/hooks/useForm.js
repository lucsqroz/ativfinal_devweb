import { useState } from 'react';

const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  // Atualiza o estado do campo do formulário
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // Chama a função de callback (por exemplo, para enviar os dados do formulário)
  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  // Pode adicionar funcionalidades de validação aqui se necessário

  return {
    handleChange,
    handleSubmit,
    values,
    setValues
  };
};

export default useForm;
