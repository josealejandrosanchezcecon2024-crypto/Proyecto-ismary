export default class Cl_Alquiler {
    constructor(inquilino,montoMensual){
        this.inquilino = inquilino
        this.montoMensual = montoMensual
}
set inquilino(inquilino){
    this._inquilino = inquilino;
}
get inquilino(){
    return this_inquilino;
}
set montoMensual(montoMensual){
    this._montoMensual = +montoMensual;
}
get montoMensual(){
    return this_montoMensual;
}

montoMensual(){
    return this._montoMensual() 
}
recargo(){
    if (this.mesesAtraso>2)
    return this.montoMensual * 5/100
}
totalMes(){
    return this._montoMensual + this.recargo()
}
}