import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Direccion from "./direccion.js"
import Tiempo from "./tiempo.js"

class Main {
    constructor(tiempo,precio,direccion){
        this.tiempo = new Tiempo (9,45,"pm");
        this.precio = new Precio ("$127.00, $127.45, $1,127.00, $34,127.45")
        this.direccion = new Direccion ("Cerrada de la hacienda" + 43, 3 + "rinconada de la hacienda", "20978", "Colima", "Villa de alvarez")

        
    }
    getFecha(){
        console.log(this.tiempo.getFormato24())
    }
    getPrecio(){
        console.log(this.precio.getPrecio())
    }
    getDireccion(){
        console.log(this.direccion.getFormatoCorto())
        console.log(this.direccion.getFormatoExtendido())
    }
}
let app = new Main()
app.getFecha()
app.getPrecio()
app.getDireccion()