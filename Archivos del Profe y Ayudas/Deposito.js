/* Esta clase representa un depósito cilíndrico donde se almacena aceite  */
/*
public class Deposito {

    //Campos de la clase
    private float diametro;
    private float altura;
    private String idDeposito;

    //Constructor sin parámetros auxiliar
    public Deposito () { //Lo que hace es llamar al constructor con parámetros pasándole valores vacíos
        this(0,0,"");
    } //Cierre del constructor

    //Constructor de la clase que pide los parámetros necesarios
    public Deposito (float valor_diametro, float valor_altura, String valor_idDeposito) {
        if (valor_diametro > 0 && valor_altura > 0) {
            diametro = valor_diametro;
            altura = valor_altura;
            idDeposito = valor_idDeposito;
        } else {
            diametro = 10;
            altura = 5;
            idDeposito = "000";
            System.out.println ("Creado depósito con valores por defecto diametro 10 metros altura 5 metros id 000" );
        }
    } //Cierre del constructor

    public void setValoresDeposito (String valor_idDeposito, float valor_diametro, float valor_altura) {
        idDeposito = valor_idDeposito;
        diametro = valor_diametro;
        altura = valor_altura;
        if (idDeposito !="" && valor_diametro > 0 && valor_altura > 0) {

        } else {
            System.out.println ("Valores no admisibles. No se han establecido valores para el depósito");
            //Deposito (0.0f, 0.0f, ""); Esto no es posible. Un constructor no es un método y por tanto no podemos llamarlo
            idDeposito = "";
            diametro = 0;
            altura = 0;
        }
    } //Cierre del método

    public float getDiametro () {
        return diametro;
    } //Método de acceso

    public float getAltura () {
        return altura;
    } //Método de acceso

    public String getIdDeposito () {
        return idDeposito;
    } //Método de acceso

    public float valorCapacidad () { //Método tipo función
        float capacidad;
        float pi = 3.1416f; //Si no incluimos la f el compilador considera que 3.1416 es double
        capacidad = pi * (diametro/2) * (diametro/2) * altura;
        return capacidad;
    }

} //Cierre de la clase
*/

//Javascript


class Deposito {

    //Campos de la clase
    #diametro = 0;
    #altura = 0;
    #idDeposito = '';
    fechaCaducidad = "dic 2025"
    zona = "Almacenaje Chetumal";

    //Constructor sin parámetros auxiliar
    /*
    Deposito () { //Lo que hace es llamar al constructor con parámetros pasándole valores vacíos
        this(0,0,"");
    }
    */

    //Constructor de la clase que pide los parámetros necesarios
    constructor (valor_diametro = 10, valor_altura = 5,
                 valor_idDeposito = 0) {
        //if (valor_diametro > 0 && valor_altura > 0) {
            this.diametro = valor_diametro;
            this.altura = valor_altura;
            this.idDeposito = valor_idDeposito;
        /*} else {
            this.#diametro = 10;
            this.#altura = 5;
            this.#idDeposito = "000";
        }*/
    } //Cierre del constructor

    setValoresDeposito (valor_idDeposito, valor_diametro, valor_altura) {
        this.idDeposito = valor_idDeposito;
        this.diametro = valor_diametro;
        this.altura = valor_altura;

        /*if (this.#idDeposito !="" && valor_diametro > 0 && valor_altura > 0) {

        } else {*/

        if (this.idDeposito == "" || valor_diametro <= 0 || valor_altura <= 0) {
            this.idDeposito = "";
            this.diametro = 0;
            this.altura = 0;
        }
    } //Cierre del método

    get diametro () {
        return this.#diametro;
    } //Método de acceso

    set diametro (diam) {
        this.#diametro = diam;
    }

    get altura () {
        return this.#altura;
    } //Método de acceso

    set altura (alt) {
        this.#altura = alt;
    } //Método de acceso

    get idDeposito () {
        return this.#idDeposito;
    } //Método de acceso

    set idDeposito (idDep) {
        this.#idDeposito = idDep;
    } //Método de acceso

    valorCapacidad () { //Método tipo función
        let capacidad = Math.PI * (this.diametro/2) * (this.diametro/2) * this.altura;
        return capacidad;
    }

} //Cierre de la clase


function main(){
   let tanque1 = new Deposito(5, 3, '1');
   console.log("Objeto tanque1: id = " + tanque1.idDeposito
                        + " diámetro = " + tanque1.diametro
                        + " altura = " + tanque1.altura);

   console.log("Capacidad = " + tanque1.valorCapacidad() + " m3");

   tanque1.setValoresDeposito('1', 10, 6);
   tanque1.diametro = 7;

   console.log("Objeto tanque1: id = " + tanque1.idDeposito
   + " diámetro = " + tanque1.diametro
   + " altura = " + tanque1.altura);

   console.log("Capacidad = " + tanque1.valorCapacidad() + " m3");

   let cadJSon = JSON.stringify(tanque1); //Convertir a JSON
   console.log(`Objeto tanque1: ${cadJSon}`);

   let cadena = '{"name": "John", "age": 30, "city": "New York"}';
   let objCodigo = JSON.parse(cadena);
   console.log("Nombre = " + objCodigo.name
        + " edad = " + objCodigo.age
        + " city = " + objCodigo.city);
}


main();