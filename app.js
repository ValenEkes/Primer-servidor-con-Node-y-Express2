import tiempo2 from "./time.js"
import  express  from "express"

const app = express()
app.get('/',(req,res)=>{
    res.send("Bienvenido")
})
app.get('/hora',(req,res)=>{
    res.send(tiempo2.horaCompleta)
})
app.get('/fecha-completa',(req,res)=>{
    res.send(tiempo2.horaCompleta + tiempo2.fecha)

})

export default app