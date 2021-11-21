const button = document.querySelector("button");
console.log(button);
const output = document.querySelector("p");

const getPosition = (opts) => {
  console.log("Get Position function");
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {},
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("SET TIMER done");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  console.log("Track user handler function");
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .then((data) => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log("Timer don?");
    console.log("Timer done.");
  });
  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);
console.log("First console invoked");
// let result = 0;
// for (let i = 0; i < 1000_000_000; i++) {
//   result += i;
// }

// console.log(result);
