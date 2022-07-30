type FilterCallbackfn<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallbackfn<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const filteredArray = myFilter([1, 2, 3, 7, 8, 9], (value) => value > 5);
console.log(filteredArray);

// explicitando generic type na chamada da função
const filteredStringArray = myFilter<string>(
  ['a', 'b', 'c'],
  (value) => value === 'b',
);
console.log(filteredStringArray);

// Filter interno javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const originalFilteredArray = array.filter((value) => value < 5);
console.log(originalFilteredArray);
