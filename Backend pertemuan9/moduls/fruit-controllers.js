const fruits = require("./data.js");

/**
 * menampilkan semua data
 * yang ada di dalam array bernama fruits
 * pada file data.js
 */
function index() {
  for (const fruit of fruits) {
    console.log(fruit);
  }
}

// menambah data
function store(name) {
  fruits.push(name);
  index();
}

module.exports = { index, store }; // menggunakan object jika exports 2 data