import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // Use efect permite realizar renderizados secundarios
  // como argumentos tiene, funcion collbak a realizar y como arreglo las condiciones.
  // cuando esta bacio [] quiere decir que solo se ejecutara cuando se crea el componente
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  }
}
