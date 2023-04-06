// HOW TO create a promise
const ektaPromise = (param) => {
  return new Promise((resolve, reject) => {
    if (param > 10 || param < 0)
      reject("Invalid parameter. I only accept from 1 to 10");
    else resolve(param * 10);
  });
};

// PROMISE async await syntax
const main = async () => {
  try {
    const res = await ektaPromise(11);

    console.log(res);

    const finalRes = res / 10;

    console.log(finalRes);
  } catch (err) {
    console.error(err);
  }
};

main();
