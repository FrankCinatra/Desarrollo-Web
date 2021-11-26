function matrix(){
	var body = document.getElementsByTagName("body")[0];
	let matrixnxn = document.getElementById("nxnvalue").value;
	let tabla = document.createElement("table");
	let rows, reg, text;

	let arrayM = new Array(matrixnxn);
	//crear array anidado
	for(var k=0; k<matrixnxn; k++){
		arrayM[k] = new Array(matrixnxn);
	}
	//matriz de 1s y 0s
	for(let j=0; j<matrixnxn; j++){
		for(let i=0; i<matrixnxn; i++){
			if(j==i){
				arrayM[j][i] = '1';
			}else{
				arrayM[j][i] = '0';
			}
		}
	}
	
	for (let j = 0; j < arrayM.length; j++) {
		rows = document.createElement("tr");

		for (let i = 0; i < arrayM.length; i++) {
			reg = document.createElement("td");

			text = document.createTextNode(arrayM[j][i]);
			reg.appendChild(text);
			rows.appendChild(reg);
		}
		tabla.appendChild(rows);
	}
	/-Conversion de MATRIZ a HTML sin ARRAYS-/
	/*
	for(let j=0; j<matrixnxn; j++){
		rows = document.createElement("tr");
		for(let i=0; i<matrixnxn; i++){
			if(j==i){
				reg = document.createElement("td");
				reg.innerHTML += ' 1 ';
			}else{
				reg = document.createElement("td");
				reg.innerHTML += ' 0 ';
			}
			rows.appendChild(reg);
		}
		tabla.appendChild(rows);
	}*/
	/--Fin--/
	//atributos de tabla para estética
	tabla.setAttribute("border", "2");
	tabla.setAttribute("text-align", "center");
	tabla.setAttribute("align","center");
	tabla.setAttribute("border-collapse", "collapse");
	body.innerHTML = "";
	body.appendChild(tabla);

	let clearform = document.createElement("form");
	let clearbutton = document.createElement("input");
	clearbutton.setAttribute("type","submit");
	clearbutton.setAttribute("value","Volver😎");

	clearform.setAttribute("action","ArraysDomEX-1.html");
	clearform.appendChild(clearbutton);
	body.appendChild(clearform);
}

function anyvalue(){
	let valor = document.getElementById("nxnvalue").value;
	if(valor < 2){
		alert("Favor de insertar un numero mayor a 2");
	}else matrix();
}