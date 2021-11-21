new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
})
  .then((number) => {
    console.log(number);
    return number ** 2;
  })
  .then((number) => {
    console.log(number);
    return number ** 2;
  })
  .then((number) => {
    console.log(number);
    return number ** 2;
  });
