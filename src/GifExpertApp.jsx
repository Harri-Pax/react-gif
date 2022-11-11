import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    // validando para no obtener dos valores iguales
    if (categories.map(e=>e.toLowerCase()).includes(newCategory.toLowerCase())) return;
    // recordar que las funciones deben ser inmutables
    setCategories([ newCategory, ...categories]);
    // tambien se puede usar:
    // setCategories( categorias => [...categorias, 'valorant'])
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpert</h1>
      {/* Input */}
      {/** Recorcdar: los eventos siempre tienen el estandar de iniciar su nombre con "on.." ejms. onNewCategory  */}
      {/** debido a que usamos el argumento en la funcion de llamado: onNewCategory = event => {onAddCategory(event)}
       * es recomendable solo especificar de la siguiente manera...
       */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* Listado de gif */}
      <ol>
        {/** en la funcion map(), el segundo argumento es el index,
         * pero como recomendacion no usarlo lo mas que se pueda
         * la razon es que en caso se elimine un valor, se eliminaria la referencia a la pocision
         * y podria haber un comportamient inesperado, lo recomendable es usar un id, u otro valor unico*/}
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
      {/* Gif item */}
    </>
  );
};
