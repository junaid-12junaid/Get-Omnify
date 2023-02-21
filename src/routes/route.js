const express = require('express')
const router = express.Router()
const { authentication } = require("../MiddleWare/auth")

const { createUser, loginUser } = require('../Controllers/userController')


// for users route=============================>

router.post("/user/signup", createUser)
router.post("/user/signin", loginUser)

// for worng route=============================>

router.all('/*/', async function (req, res) {
    return res.status(404).send({ status: false, message: "Page Not Found" })
})


module.exports = router