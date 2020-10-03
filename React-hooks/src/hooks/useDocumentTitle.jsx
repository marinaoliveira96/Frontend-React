import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  //useEffect = toda vez que o componente renderizar
  useEffect(() => {
    document.title = title;

    return () => {
      console.log('Clean up'); //chamdo toda vez que renderiza
      //componenteWillUnmount
    };
  }); //array de dependencias = só muda quando o valor passado no array mudar
}
