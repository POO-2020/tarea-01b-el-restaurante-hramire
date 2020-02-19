import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Direccion from "./direccion.js"
import Tiempo from "./tiempo.js"

class Main {
    constructor(tiempo,precio){
        this.tiempo = new Tiempo (9,45,"pm");
        this.precio = new Precio ("$127.00, $127.45, $1,127.00, $34,127.45")

        
    }
    getFecha(){
        console.log(this.tiempo.getFormato24())
    }
    getPrecio(){
        console.log(this.precio.getPrecio())
    }
}
let app = new Main()
app.getFecha()
app.getPrecio()