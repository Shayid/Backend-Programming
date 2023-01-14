// TODO 5: SETUP MODEL
const db = require("../config/cofig") // import database

class Patient {
  //membuat method static all => menampilkan seluruh data dari db
    static all() {
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM patients"
          db.query(sql, (err, results) => {
            err ? reject(err) : resolve(results)
          })
        })
      }
    
      //membuat method static find => melakukan select data berdasakan id
      static find(id) {
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM patients WHERE id = ?"
          db.query(sql, id, (err, results) => {
            const [patient] = results
            err ? reject(err) : resolve(patient)
          })
        })
      }

    //membuat method static update => melakukan perubahan data ke db
      static async update(id, data) {
        await new Promise((resolve, reject) => {
          const sql = "UPDATE patients SET ? WHERE id = ?"
          db.query(sql, [data, id], (err, results) => {
            err ? reject(err) : resolve(results)
          })
        })
        const patient = await this.find(id)
        return patient
      }
    
      //membuat method static delete => melakukan hapus data di db
      static delete(id) {
        return new Promise((resolve, reject) => {
          const sql = "DELETE FROM patients WHERE id = ?"
          db.query(sql, id, (err, results) => {
            err ? reject(err) : resolve(results)
          })
        })
      }
    
      // membuat method static create => melakukan tambah data ke db
      static async create(data) {
        const id = await new Promise((resolve, reject) => {
          const sql = "INSERT INTO patients SET ?"
          db.query(sql, data, (err, results) => {
            err ? reject(err) : resolve(results.insertId)
          })
        })
        const patient = await this.find(id)
        return patient
      }
    
      //membuat method static findByStatus => menampilkan data berdasarkan status patient
      static findByStatus(status) {
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM patients WHERE status = ?"
          db.query(sql, status, (err, results) => {
            err ? reject(err) : resolve(results)
          })
        })
      }

      //membuat method static search => melakukan pencarian data ke db
      static search(name) {
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM patients WHERE name LIKE ?"
          db.query(sql, "%" + name + "%", (err, results) => {
            err ? reject(err) : resolve(results)
          })
        })
      }
}

// export class Patient
module.exports = Patient