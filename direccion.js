export default class Direccion {
    constructor(calle,numeroExterior,numeroInterior,colonia,codigoPostal,ciudad,municipio){
    }
getFormatoCorto(){

}
getFormatoExtendido(){
    
}
}
let pepe = new Direccion ("cerrada de la hacienda" + 43 );
let ramon = new Direccion("Alfonozo Reyes" + 434, + "interior " + 3);
let juan = new Direccion ("bahía de manzanillo" + 23 + "interior"+6);

pepe.getFormatoCorto();
ramon.getFormatoExtendido();

