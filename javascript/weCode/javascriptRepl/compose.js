function compose(...funcArr) {
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (...args) {
        return nextFunc(prevFunc(...args));
      };
    },
    function (k) {
      return k;
    }
  );
}

export default compose;
