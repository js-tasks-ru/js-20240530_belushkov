/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let newArr = [...arr]; // создаем копию массива чтобы не мутировать исходный массив
  return newArr.sort((a, b) => {
    let comparison = a.localeCompare(b, undefined, {
      caseFirst: 'upper'
    }); // сортируем с преимуществом для верхнего регистра
    if (param === 'desc') {
      comparison *= -1; // меняем порядок сортировки на обратный, если параметр 'desc'
    }
    return comparison;
  });
}
