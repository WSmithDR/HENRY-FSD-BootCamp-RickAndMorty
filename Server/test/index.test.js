const app = require("./../src/app")
const session = require("supertest")
const request = session(app)

describe("test de RUTAS", ()=>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status: 200", async ()=>{
            const response = await request.get("/rickandmorty/character/1")
            expect(response.statusCode).toBe(200)
        })

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () =>
        {
            const response = await request.get("/rickandmorty/character/1")
            const props =['id', 'name', 'species', 'gender', 'status', 'origin', 'image']
            props.forEach(prop=>{
                expect(response.body).toHaveProperty(prop)
            })
        })

        it("Si hay un error responde con status: 500", async ()=>{
            const response = await request.get("/rickandmorty/character/665j")
            expect(response.statusCode).toBe(500)
        })
    })

    describe("GET /rickandmorty/login", ()=>{
        const access = {access: true}
        
        it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async()=>{
            const response = await  request.get("/rickandmorty/login?email=wagnersmith123@hotmail.com&password=@BOLUDO_123")
            expect(response.body).toEqual(access)
        })

        it("Responde con un objeto con la propiedad access en false si la información del usuario no es válida", async()=>{
            const response = await  request.get("/rickandmorty/login?email=wagnersmith123@hotmail.com&password=@BOLUDO_123dfsd")
            access.access = false
            expect(response.body).toEqual(access)
        })
    })
})