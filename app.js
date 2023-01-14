/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

// import express dan router
const express = require("express")
const router = require("./routes/index")
const app = express() // Membuat object express

// menggunakan middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router) // Menggunakan routing (router)

// membuat server dengan port 3000
app.listen(3000, () =>
  console.log("[Server] running at: http://localhost:3000")
)