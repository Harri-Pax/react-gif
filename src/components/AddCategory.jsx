import { useState } from "react";

// Desestructuramos las props, en este caso solo setCategories -> props
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    // mediante prevetDefault, podemos persistir los datos que se agregan, mismos que se pierden al hacer submit
    // pero mediante esto, cada comit, no recargara la consola.
    event.preventDefault();
    // Validacion
    if (inputValue.trim().length <= 1) return;

    console.log(inputValue);
    onNewCategory(inputValue.trim());
    //Limpiamos el input
    setInputValue("");
  };

  return (
    // ... onSubmit={event => onSubmit(event)}, debido a que el argumento se usa en la funcion, esto podemos obiarlo
    // y usarlo solo asi...
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
