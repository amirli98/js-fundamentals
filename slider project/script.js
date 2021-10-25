let models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link: "https://www.sahibinden.com/en/bmw-4-series-418d-gran-coupe",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "https://www.sahibinden.com/en/off-road-suv-pickup-trucks-mazda-cx-3-1.5-sky-d",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link: "https://www.volvocars.com/tr/v/cars/s60?gclsrc=aw.ds&&gclid=CjwKCAjwq9mLBhB2EiwAuYdMtZdw2UY5Z3xi4PYQtDWzMJMQTNWHje9qOA-G4jFbj4E1PHciR1nG5RoCLKQQAvD_BwE",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
    link: "https://www.skoda.com.tr/modeller/yeni-superb?utm_source=Google&utm_medium=cpc&utm_campaign=model_superb&utm_content=search&gclid=CjwKCAjwq9mLBhB2EiwAuYdMta8sk6ft5MbZZ8YIT_aNm7Czy7bcKMy_UxaFU-swmjdjRQ5UKg0G5RoCSzIQAvD_BwE",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "https://honda.com.tr/otomobil/modeller/honda-civic-sedan/honda-civic-sedan-fiyat-listesi",
  },
];

const log = console.log;

var index = 0;

const title = document.querySelector(".card-title");

const link_ = document.querySelector(".card-link");

const img_ = document.querySelector(".card-img-top");
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function (e) {
    index--;
    index %= 5;
    domInfo(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function (e) {
    index++;
    index %= 5;
    domInfo(index);
  });

const domInfo = function (index) {
  title.textContent = models[index].name;

  img_.setAttribute("src", models[index].image);

  link_.setAttribute("href", models[index].link);
  link_.setAttribute("target", "_blank");
};
