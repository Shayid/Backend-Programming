// Solution With Promise  | Asynchronous Programming Javascript
console.log("----- Solution With Promise | Asynchronous Programming -----");
const persiapan = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Persiapan...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rebus Air...");
    }, 3000);
  });
};

const masak = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Masak...\nSelesai...");
    }, 5000);
  });
};

const main = () => {
  persiapan()
    .then((result) => {
      console.log(result);
      return rebusAir();
    })
    .then((result) => {
      console.log(result);
      return masak();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

main();