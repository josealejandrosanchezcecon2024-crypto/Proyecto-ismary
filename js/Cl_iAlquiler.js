export default class Cl_iAlquiler {

leerinquilino(){
    return prompt("Introduce el nombre del inquilino")
}
leermontoMensual(){
    return prompt ("Introduce el monto mensual")
}
reporteinquilino(inquilino,montoMensual) {
    return `Inquilino:${inquilino}
    <br>montoMensual:$${montoMensual}
    <br>Recargo:$${recargo}
    <br>Totalmes:$${totalmes}`;
}
}
