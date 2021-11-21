/* async function fn() {
  return "hello";
}

fn().then((response) => console.log(response)); */

function getCategory() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("phone");
    }, 1000);
  });
}

function getProducts(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`5 products in ${category}`);
    }, 1000);
  });
}

getCategory()
  .then(getProducts)
  .then((result) => console.log(result));

async function getProduct() {
  let category = await getCategory();
  let result = await getProducts(category);
  console.log(result);
}

getProduct();
