function matrix(){
	var body = document.getElementsByTagName("body")[0];
	let matrixnxn = document.getElementById("nxnvalue").value;
	let tabla = document.createElement("table");
	let rows, reg;

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
	}
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

	clearform.setAttribute("action","ArraysDomEX-2.html");
	clearform.appendChild(clearbutton);
	body.appendChild(clearform);
}

function anyvalue(){
	let value = document.getElementById("nxnvalue").value;
	if(value < 1){
		alert("Favor de insertar un numero");
	}else matrix();
}

function cleartable(){
	var tbody = getElementsByTagName("table");
	document.body.removeChild(tbody);
}