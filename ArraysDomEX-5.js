//Array global que guardara todos los promedios
promTotal = new Array();

function materias(){
	var body = document.getElementsByTagName("body")[0];
    let matriY = document.getElementById("numAlum").value; //referencia a trabajar sobre eje Y
    let matriX = document.getElementById("numMat").value; //referencia a trabajar sobre eje X
	let tabla = document.createElement("table");
	let rows, reg, titulos;
	//Crear tabla en la interfaz
	matriY++;
	matriX++;
	
	for(let j=0; j<matriY; j++){
		rows = document.createElement("tr");
		
		for(let i=0; i<=matriX; i++){
			titulos = document.createElement("th");
			reg = document.createElement("td");

			if(j==0 && i==0){
				titulos.innerHTML = "Alumnos";
				rows.appendChild(titulos);
			}else if(j==0 && i!=matriX){
				titulos.innerHTML = "Materia"+i;
				rows.appendChild(titulos);
			}else if(j==0 && i==matriX){
				titulos.innerHTML = "Promedio";
				rows.appendChild(titulos);
			}else if(j>=1 && i==0){
				reg.innerHTML = "Alumno"+j;
				rows.appendChild(reg);
			}else if(j>=1 && i!=matriX){
				reg.innerHTML = "<input type='number' value='0' id='valor"+j+""+i+"' min='0' max='100' onchange='checkProm("+j+","+matriX+")'>";
				rows.appendChild(reg);
			}else if(i == matriX){
				reg.innerHTML = "<input type='number' value='00' readonly id='prom"+j+"'>";
				rows.appendChild(reg);
			}
		}
		tabla.appendChild(rows);
	}

	body.innerHTML = "";//Borrar todo el contenido de BODY en HTML
	//CSS de la tabla
    tabla.setAttribute("border", "2");
	tabla.setAttribute("text-align", "center");
	tabla.setAttribute("align","center");
	tabla.setAttribute("border-collapse", "collapse");
	//Agrego la tabla al Body en blanco
	body.appendChild(tabla);
	//Creo boton de volver en un form
	let clearform = document.createElement("form");
	let clearbutton = document.createElement("input");
	clearbutton.setAttribute("type","submit");
	clearbutton.setAttribute("value","Volver");

	clearform.setAttribute("action","ArraysDomEX-5.html");
	clearform.appendChild(clearbutton);
	body.appendChild(clearform);
	//Boton aprobados/repobados/prom total
	let checkprom = document.createElement("input");;
	checkprom.setAttribute("type","submit");
	checkprom.setAttribute("value","Inspeccionar");
	checkprom.setAttribute("onclick","comprobaciones("+matriX+")");

	body.appendChild(checkprom);
}

function anyvalue(){
	let valor1 = document.getElementById("numAlum").value;
    let valor2 = document.getElementById("numMat").value;

	if(valor1 < 1 || valor2 < 1){
		alert("Favor de llenar los campos");
	}else materias();
}
//recibe:              7       6
function checkProm(posAlum, materias){
	materias--;

	let prom = document.getElementById("prom"+posAlum);
	let arrayprom = new Array(materias);
	let i=0, suma=0, promedio=0;

	for(let j=1; j<=materias; j++){
		arrayprom[i] = parseInt(document.getElementById("valor"+posAlum+j).value);
		i++;
	}
	
	for (let k = 0; k<arrayprom.length; k++) {
		suma = suma + arrayprom[k];
	}
	
	promedio = suma / materias;

	prom.setAttribute("value",""+promedio);

	//Calcular promedio total
	posAlum--;
	promTotal[posAlum] = promedio;
}

function comprobaciones(totAlum){
	var body = document.getElementsByTagName("body")[0];		
	let parraf = document.createElement("p");
	let promT=0, aprobados=0, reprobados=0;
	totAlum--;
	//Promedio total
	for(let i=0; i<promTotal.length; i++){
		promT = promT + promTotal[i];
		if(promTotal[i] < 70){
			reprobados++;
		}else{
			aprobados++;
		}
	}
	promT = promT/promTotal.length;
	parraf.innerHTML += "Promedio Total: "+promT+"<br>";
	//Aprobados
	parraf.innerHTML += "Total de Aprobados: "+aprobados+"<br>";
	//Reprobados
	parraf.innerHTML += "Total de Reprobados: "+reprobados+"<br>";
	//Promedio de aprobados
	aprobados = (aprobados*100)/totAlum;
	parraf.innerHTML += "Porcentaje de aprobacion: "+aprobados+"%<br>";
	//Promedio de reprobados
	reprobados = (reprobados*100)/totAlum;
	parraf.innerHTML += "Porcentaje de reprobacion: "+reprobados+"%<br>";
	
	body.appendChild(parraf);
}