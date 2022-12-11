/// Solution With Callback  | Asynchronous Programming Javascript
console.log("----- Solution With Callback | Asynchronous Programming -----");
const persiapan = () => console.log("Persiapan...");

const rebusAir = () => console.log("Rebus Air...");

const masak = () => console.log(`Masak..\nSelesai...`);

const main = () => {
  setTimeout(() => {
    persiapan();
    setTimeout(() => {
      rebusAir();
      setTimeout(() => {
        masak();
      }, 5000);
    }, 7000);
  }, 3000);
};

main();