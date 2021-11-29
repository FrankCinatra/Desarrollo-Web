//Código JavaScript
/*
    Simular un torneo de dados.
    El torneo se juega hasta que un jugador gana 3 juegos.
    Un jugador gana un juego cuando la suma de los 2 dados es 7 y el otro no obtiene un 7.
    En caso de que en un juego ninguno de los jugadores obtenga 7, se declara empate
*/
//Función constructora Jugador
class Jugador{
    #_caraDado1 = 0;
    #_caraDado2 = 0;
    //constructor que recibe el nombre
    constructor(nombre){
        this.nombre = nombre;
    }
    //getter y setter ambos dados
    get caraDado1(){
        return this.#_caraDado1;
    }
    set caraDado1(dado1){
        this.#_caraDado1=dado1;
    }

    get caraDado2(){
        return this.#_caraDado2;
    }
    set caraDado2(dado2){
        this.#_caraDado2=dado2;
    }
}


class JuegoDados{
    constructor(numeroJuego, j1, j2){
        this.numeroJuego = numeroJuego;
        this.jugador1 = new Jugador(j1.nombre);
        this.jugador2 = new Jugador(j2.nombre);
    }

    tirarDados(){
        this.jugador1.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador1.caraDado2 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado2 = Math.round((Math.random() * 5) + 1);
    }

    determinaGanador(){
        if ( ((this.jugador1.caraDado1 + this.jugador1.caraDado2) == 7)
            && ((this.jugador2.caraDado1 + this.jugador2.caraDado2) != 7) ){
                return this.jugador1.nombre;
        }else if ( ((this.jugador2.caraDado1 + this.jugador2.caraDado2) == 7)
            && ((this.jugador1.caraDado1 + this.jugador1.caraDado2) != 7) ){
                return this.jugador2.nombre;
        }else return "Empate";
    }
}

class torneoDados{
    #_juegosGanadosJugador1=0;
    #_juegosGanadosJugador2=0;

    constructor(){
        this.jugadas = new Array(); //Arreglo de objetos de clase JuegoDados
    }
    //Jugador 1, métodos getter y setter
    get juegosGanadosJugador1(){
        return this.#_juegosGanadosJugador1;
    }
    set juegosGanadosJugador1(juegosGanadosJugador1){
        this.#_juegosGanadosJugador2=juegosGanadosJugador1;
    }
    //Jugador 2, métodos getter y setter
    get juegosGanadosJugador2(){
        return this.#_juegosGanadosJugador2;
    }
    set juegosGanadosJugador2(juegosGanadosJugador2){
        this.#_juegosGanadosJugador2=juegosGanadosJugador2;
    }

    jugar(){
        let seguir=true;
        do{
            this.jugadas.push(new JuegoDados(this.jugadas.length,this.jugador1,this.jugador2));
            this.jugadas[this.jugadas.length-1].tirarDados();
            if(this.juegosGanadosJugador1==3 || this.juegosGanadosJugador2==3){
                seguir=false;
            }else if(this.jugadas[this.jugadas.length-1].determinaGanador() == this.jugador1.nombre){
                this.resultado = this.jugador1.nombre;
                //this.juegosGanadosJugador1++;
            }else if(this.jugadas[this.jugadas.length-1].determinaGanador() == this.jugador2.nombre){
                this.resultado = this.jugador2.nombre;
                //this.juegosGanadosJugador2++;
            }
        }while(seguir);
        console.log(this.jugadas);
    }

    #_resultado(){
        if(this.juegosGanadosJugador1==3){
            return this.jugador1.nombre;
        }else{
            return this.jugador2.nombre;
        }
    }

    ////hacer privado y métodos getter y setter
    get resultado(){
        return this.#_resultado();
    }
    set resultado(ganador){
        if(ganador == this.jugador1.nombre){
            if(this.#_juegosGanadosJugador1!=3){
                this.#_juegosGanadosJugador1++;
            }
        }else if(ganador == this.jugador2.nombre){
            if(this.#_juegosGanadosJugador2!=3){
                this.#_juegosGanadosJugador2++;
            }
        }
    }

    crear(j1,j2){
        this.jugador1 = new Jugador(j1);
        this.jugador2 = new Jugador(j2);
        this.jugar();
        
    }
}

let torneo = new torneoDados();
torneo.crear("Pedro","Pablo");
console.log("Ganador del torneo: " +torneo.resultado);
console.log("Juegos jugados: " +torneo.jugadas.length);
console.log(torneo.jugador1.nombre +" ganó: " +torneo.juegosGanadosJugador1 +" veces");
console.log(torneo.jugador2.nombre +" ganó: " +torneo.juegosGanadosJugador2 +" veces");