///membuat callback
console.log("----- Membuat Callback Function -----");
function formatName(nama) {
  const result = nama.toUpperCase();
  return result;
}

function getName(nama, callback) {
    const result = callback(nama);
    console.log(result);
  }

  getName("Muhammad Shayid Vedawynne", formatName);

  console.log(""); // spasi

  // setTimeout | Asynchronous Programming Javascript
console.log("----- setTimeout | Asynchronous Programming -----");
const dua = () => console.log("Dua");

console.log("Satu");

setTimeout(dua, 3000); // function dua dijeda selama 3 detik

console.log("Tiga");