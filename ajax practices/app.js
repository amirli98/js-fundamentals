let myObj = {
  url: "https://randomuser.me/api/?results=20",
  headers: { "content-type": "application/json" },
};

let request = (obj) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url, true);

    if (xhr.headers) {
      Object.keys[obj.headers].forEach((key) => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }

    xhr.onload = () => {
      if (xhr.status / 100 < 3) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = () => {
      reject(xhr.statusText);
    };

    xhr.send(obj.body);
  });
};

request(myObj)
  .then((data) => {
    let users = JSON.parse(data);
    console.log(users.results);
  })
  .catch((err) => {
    console.error(err);
  });
