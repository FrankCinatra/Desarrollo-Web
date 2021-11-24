/--Código JavaScript--/
function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego-1;
    this.jugador1 = j1;
    this.jugador2 = j2;
    this.cj1 = 0;
    this.cj2 = 0;

    this.tirarDados = function() {
        this.jugador1.caraDado1 = Math.floor(Math.random()*7); //usar random(1,6)
        this.jugador1.caraDado2 = Math.floor(Math.random()*7); //usar random(1,6)

        this.jugador2.caraDado1 = Math.floor(Math.random()*7); //usar random(1,6)
        this.jugador2.caraDado2 = Math.floor(Math.random()*7); //usar random(1,6)
    }

    this.determinaGanador = function() {
        
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
                this.cj1=this.cj1+1;
                this.numeroJuego = this.numeroJuego+1;
                return this.jugador1.nombre;
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador1.caraDado2 != 7) ) {
                this.cj2=this.cj2+1;
                this.numeroJuego = this.numeroJuego+1;
                return this.jugador2.nombre;
        }
        else{
            this.numeroJuego = this.numeroJuego+1;
            return "Empate";
        }
    }
}

let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");

let juego1 = new JuegoDados(1, pedro, antonio);
//Determinar el primer ganador de 3 juegos y cuantos juegos hubo
let ganador;
let seguir=true;

do{
    juego1.tirarDados();
    ganador = juego1.determinaGanador();

    console.log("EL ganador de la ronda "+juego1.numeroJuego +" es " +ganador);
    if(juego1.cj1==3){
        console.log("El ganador del juego es: " +juego1.jugador1.nombre); seguir=false;
    }else if(juego1.cj2==3){
        console.log("El ganador del juego es: " +juego1.jugador2.nombre); seguir=false;
    }
}while(seguir);
console.log("En el juego numero: " +juego1.numeroJuego);

/--Codigo para el mejor de 3--/
/*
for(let i=1; i<=numjuegos; i++){
    juego1.tirarDados();
    ganador = juego1.determinaGanador();
    console.log(juego1.jugador1.caraDado1+juego1.jugador1.caraDado1);
    console.log(juego1.jugador2.caraDado1+juego1.jugador2.caraDado2);
    if(juego1.cj1>numjuegos/2 || juego1.cj2>numjuegos/2){
        if(juego1.cj1>juego1.cj2) console.log("El ganador del juego es: " +juego1.jugador1.nombre);
        else if(juego1.cj2>juego1.cj1) console.log("El ganador del juego es: " +juego1.jugador2.nombre);
        
        console.log("En el juego numero: " +juego1.numeroJuego);
        break;
    }else if(i==numjuegos){
        if(juego1.cj1>juego1.cj2) console.log("El ganador del juego es: " +juego1.jugador1.nombre);
        else if(juego1.cj2>juego1.cj1) console.log("El ganador del juego es: " +juego1.jugador2.nombre);
        else console.log("Empate");
        
        console.log("En el juego numero: " +juego1.numeroJuego);
    }
}*/