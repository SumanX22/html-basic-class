const waitFor1Second = () => {
  console.log("loading...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const print1To10 = async () => {
  for (let index = 1; index <= 10; index++) {
    console.log(index);
    await waitFor1Second();
  }
};

print1To10();
