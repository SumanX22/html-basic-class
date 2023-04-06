console.log("HELLO");

const callback = () => {
  console.log("I mean Udita, because you are my world");
  console.log("Aro onek kichu kora jaaye");
};

setTimeout(() => {
  console.log("WORLD");
  callback();
}, 5000);
