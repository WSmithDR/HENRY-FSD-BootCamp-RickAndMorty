const getCharById = require("../controllers/getCharById")
const login = require("../controllers/login")
const postFav = require("../controllers/postFav")
const postUser = require("../controllers/postUser")


const router = require("express").Router()

router.get("/character/:id", getCharById)

router.get("/login", login)

router.post("/fav", postFav)

router.post("/login", postUser)

//router.delete("/fav/:id", deleteFav)

module.exports = router