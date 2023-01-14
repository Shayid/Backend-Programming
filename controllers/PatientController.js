// TODO 4: SETUP CONTROLLER
const Patient = require("../models/Patient") //import model patient
const { body, validationResult } = require("express-validator") //import express vlidator

class PatientController {
  //index => menampilkan seluruh data
    async index(req, res) {
      //menggunakan method all dari model 
        const pasien = await Patient.all()
    
        //menggunakan length untuk cek data ada atau enggak
        if (pasien.length > 0) {
          const data = {
            message: "Get All Resource",
            data: pasien,
          }
          return res.status(200).json(data)
        } 
        //jika data nya kosong
        const data = { 
            message: "Data is empty",
          }
          return res.status(200).json(data)
      }

      //store => tambah data ke db
      async store(req, res) {
        //buat validasi
        const validations = [
            body("name", "Nama tidak boleh kosong").notEmpty(),
            body("phone", "Phone tidak boleh kosong")
              .notEmpty()
              .isNumeric()
              .withMessage("Phone harus berupa angka"),
            body("address", "Alamat tidak boleh kosong").notEmpty(),
            body("status", "Status tidak boleh kosong").notEmpty(),
            body("in_date_at", "Tanggal Masuk tidak boleh kosong").notEmpty(),
          ];
      
          await Promise.all(validations.map((validation) => validation.run(req)))
      
          //buat response untuk validasi
          const errors = validationResult(req)
          if (!errors.isEmpty()) {
            return res.status(422).json({
              message: "All fields must be filled correctly",
              error: errors.array(),
            })
          }

          // menggunkan method create dari model
          const pasien = await Patient.create(req.body)

          const data = {
              message: "Resource is added successfully",
              data: pasien
          }
          return res.status(201).json(data)
      }

      //show => detail data
      async show(req, res) {
        const { id } = req.params
        const pasien = await Patient.find(id) //menggunakan method find untuk cari id
    
        //kalau id ada, tampilin
        if (pasien) {
          const data = {
            message: "Get Detail Resource",
            data: pasien,
          }
          return res.status(200).json(data)
        }
        //kalau gk ada, resource not found
        const data = {
          message: "Resource not found",
        }
        return res.status(404).json(data)
      }

      //update => perubahan data ke db
      async update(req, res) {
        const { id } = req.params
        const pasien = await Patient.find(id)//menggunakan method find untuk cari id
    
        //kalau id ada, update dan tampilin
        if (pasien) {
          const pasien = await Patient.update(id, req.body)//update data dengan method update
          const data = {
            message: "Resource is update successfully",
            data: pasien,
          }
          return res.status(200).json(data);
        }
        //kalau gk ada, resource not found
        const data = {
          message: "Resource not found",
        }
        return res.status(404).json(data);
      }
    
      //destroy => menghapus data
      async destroy(req, res) {
        const { id } = req.params
        const pasien = await Patient.find(id)//menggunakan method find untuk cari id
    
        //kalau id ada, hapus dan tampilin
        if (pasien) {
          await Patient.delete(id); //hapus data dgn method delete
          const data = {
            message: "Resource is delete successfully",
          }
          return res.status(200).json(data)
        }
        //kalau gk ada, resource not found
        const data = {
          message: "Resource not found",
        }
        return res.status(404).json(data)
      }

      //search => pencari data berdasarkan name
      async search(req, res) {
        const { name } = req.params;
        const patients = await Patient.search(name); //menggunakan method search dari model dan nerima callback name
    
        //menggunakan length untuk cek data ada atau enggak
        if (patients.length > 0) {
          const data = {
            message: "Get searched resource",
            data: patients,
          };
          return res.status(200).json(data);
        }
        //jika data nya kosong
        const data = {
          message: "Resource not found",
        };
  
        return res.status(404).json(data);
      }

      //positive => tampil data patient status positive
      async positive(req, res) {
        const pasien = await Patient.findByStatus("positive")//menggunakan method findByStatus dari model
    
        //kalau data ada, tampilin
        if (pasien) {
          const data = {
            message: "Get positive resource",
            data: pasien,
          }
          return res.status(200).json(data)
        }
      }
    
      //dead => tampil data patient status dead
      async dead(req, res) {
        const pasien = await Patient.findByStatus("dead") //menggunakan method findByStatus dari model
    
         //kalau data ada, tampilin
        if (pasien) {
          const data = {
            message: "Get dead resource",
            data: pasien,
          }
          return res.status(200).json(data)
        }
      }
    
      //recovered => tampil data patient status recovered
      async recovered(req, res) {
        const pasien = await Patient.findByStatus("recovered")//menggunakan method findByStatus dari model
    
        //kalau data ada, tampilin
        if (pasien) {
          const data = {
            message: "Get recovered resource",
            data: pasien,
          }
    
          return res.status(200).json(data)
        }
      }
}

const Paticon = new PatientController()

module.exports = Paticon