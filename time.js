const tiempo=new Date()
const fecha=new Date()
const dias=fecha.getDay()
const meses=fecha.getMonth()
const años=fecha.getFullYear()
const horas=tiempo.getHours()
const minutos=tiempo.getMinutes()
const segundos=tiempo.getSeconds()
const horaCompleta=`La hora actual es: ${horas}:${minutos}:${segundos}`
const fechadehoy=`El dia de hoy es: ${dias}/${meses}/${años}`
let tiempo2={
    horas:horas,
    minutos:minutos,
    segundos:segundos,
    horaCompleta:horaCompleta,
    fecha:fechadehoy
}

export default tiempo2