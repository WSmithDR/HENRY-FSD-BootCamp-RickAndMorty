const login = require("../controllers/login")
const getCharById = require("../controllers/getCharById")
const postFav = require("./../controllers/postFav")
const deleteFav = require("./../controllers/deleteFav")
const postUser = require("./../controllers/postUser")

const router = require("express").Router()

router.get("/character/:id", (request, response) =>{
    getCharById(request, response)
})

router.get("/login", login)

router.post("/fav", (request, response)=>{
    postFav(request, response)
})

router.delete("/fav/:id", (request, response)=>{
    deleteFav(request, response)
})

router.post("/login", (request, response)=>{
    postUser(request, response)
})

module.exports = router