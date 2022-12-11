/// Solution With Async Await  | Asynchronous Programming Javascript
console.log("----- Solution With Async Await | Asynchronous Programming -----");
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

const main = async () => {
  try {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
  } catch {
    console.log(error);
  }
};

main();