const app = require("./../app")
const session = require("supertest")
const request = session(app)
const user = require("./../utils/users")[0]

describe("TEST de rutas", 
    ()=>{
        describe("GET /rickandmorty/login",
            ()=>{
                it("Response con un objeto con la propiedad access en true si la informacion del usuario es válida",
                    async ()=>{
                        console.log(user)
                        const res = await request.get(`/rickandmorty/login?email=${user.email}&password=${user.password}`)
                        console.log(res.body)
                        const access = {access:true}
                        expect(res.body).toEqual(access)
                    }
                )
            }
        )




        describe("POST /rickandmorty/fav",
            ()=>{
                it("debe guardar el personaje en favoritos",
                    async ()=>{
                        const response = await request.post("/rickandmorty/fav")
                        .send()
                    }
                )
            }
        )
    }
)