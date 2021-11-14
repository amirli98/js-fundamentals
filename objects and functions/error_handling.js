try {
  console.log(myFunction());
} catch (err) {
  console.log(err);
  console.log(err.message);
  console.log(err.name);
  console.log(err instanceof ReferenceError);
  console.log(err instanceof TypeError);
  console.log(typeof err);
}
