// TODO 2: SETUP ROUTING (ROUTER)
const Paticon = require("../controllers/PatientController")
const express = require("express")
const router = express.Router()  

// route default 
router.get("/", (req,res) => {
    res.send("Hello World!")
})

// routing untuk patient
router.get("/patient", Paticon.index)

router.post("/patient", Paticon.store)

router.get("/patient/:id", Paticon.show)

router.put("/patient/:id", Paticon.update)

router.delete("/patient/:id", Paticon.destroy)

router.get("/patient/status/positive", Paticon.positive)

router.get("/patient/status/dead", Paticon.dead)

router.get("/patient/status/recovered", Paticon.recovered)

module.exports = router // export router