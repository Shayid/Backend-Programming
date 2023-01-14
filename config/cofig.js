// TODO 3: SETUP CONFIG DATABASE
require("dotenv").config()

const mysql = require("mysql") //import mysql

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env //destructing object process.env
//menggunakan konfigurasi database dari file .env
const db = mysql.createConnection({
    user: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
});

//menghubungkan ke database menggunakan method connect
db.connect((err) => {
  if (err) {
    console.log("Error connecting " + err.stack)
    return
  } else {
    console.log("Connected to Database")
    return
  }
});

// export module db
module.exports = db