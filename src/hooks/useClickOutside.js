import { useEffect, useRef } from 'react';

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
       if (ref.current && !ref.current.contains(event.target)) {
        const isModalToggleButton = event.target.closest("button[data-modal-toggle]");
        if (!isModalToggleButton) {
          callback();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
