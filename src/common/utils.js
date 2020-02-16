export function debounce(fun, delay) {
  let timer = null;
  return function (...args) {
      if (!timer) window.clearTimeout(timer);

      timer = setTimeout( () => {
        fun.apply(this, args);
      }, delay);
  }
}

export
