// TRY CATCH block

// no parameters
const tryCatchWalaFunction = () => {
  try {
    throw new Error("Ki jata korche WIPRO!");
  } catch (err) {
    console.log("OMaaaa error holo!!");
    console.log(err);
  }
};

tryCatchWalaFunction();
