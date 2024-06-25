/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const properties = path.split('.');

  return function (obj) {
    return properties.reduce((acc, prop) => {
      if (acc === undefined) {
        return undefined;
      }
      return acc[prop];
    }, obj);
  };
}
