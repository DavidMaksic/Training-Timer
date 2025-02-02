import { useEffect, useRef } from 'react';

// - Disable button and show error message if input is empty when button is clicked

function useDisableSubmit(searchEmpty, setSearchEmpty) {
   const btnEl = useRef(null);

   useEffect(() => {
      if (searchEmpty) {
         const btnElement = btnEl.current;
         btnElement.classList.add('failed-save');
         btnElement.classList.remove('hover:bg-lime-100');
         btnElement.classList.remove('hover:shadow-lime');

         const i = setTimeout(() => {
            btnElement.classList.remove('failed-save');
            btnElement.classList.add('hover:bg-lime-100');
            btnElement.classList.add('hover:shadow-lime');

            setSearchEmpty(false);
         }, 3000);

         return function () {
            clearTimeout(i);
         };
      }
   }, [searchEmpty, setSearchEmpty, btnEl]);

   return btnEl;
}

export default useDisableSubmit;
