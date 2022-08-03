type myType = number;

const numberArray: Array<number> = [1, 2, 3, 4];
console.log(numberArray);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<myType> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 2));
export default true;
