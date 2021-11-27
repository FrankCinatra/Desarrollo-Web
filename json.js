/*Ejercicio 2
------------------------------------------
{               <--------------------------------------------Aquí se crea un objeto
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{       <--------------------------------------------Cuando están estos se crea un objeto de Batters
			"batter":
				[           <--------------------------------------------Aquí se crea un array Batter del array Batters
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	"topping":
		[       <--------------------------------------------Aquí se crea un array Topping
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
}*/
//Se crea el objeto principal
let objJson = new Object();
//Se le asignan atributos
objJson.id = 1001;
objJson.type = "donut";
objJson.name = "Cake";
objJson.ppu = 0.55;
//Se crea un array de atributos
objJson.batters = new Object();
//El array de atributos tiene un array con más atributos
//Se crea el nuevo array anidado
objJson.batters.batter = new Array();

//Se declara el objeto principal del array anidado que llevará los atributos
objJson.batters.batter[0] = new Object();
//Se declaran los atributos del primer objeto del array anidad
objJson.batters.batter[0].id = 1001;
objJson.batters.batter[0].type = "Regular";

objJson.batters.batter[0].id = 1002;
objJson.batters.batter[0].type = "Chocolate";

objJson.batters.batter[0].id = 1003;
objJson.batters.batter[0].type = "Blueberry";

objJson.batters.batter[0].id = 1004;
objJson.batters.batter[0].type = "Devil's Food";
//Se crea un array en la segunda posicion del array
//La segunda posicion del array es un objeto de atributos
objJson.topping = new Array();

//Se declara el objeto principal de la segunda posicion del array anidado que llevará los atributos
objJson.topping[0] = new Object();
//Se declaran los atributos
objJson.topping[0].id = 5001;
objJson.topping[0].type = "none";

objJson.topping[1].id = 5002;
objJson.topping[1].type = "Glazed";

objJson.topping[3].id = 5005;
objJson.topping[3].type = "Sugar";

objJson.topping[3].id = 5007;
objJson.topping[3].type = "Powdered Sugar";

objJson.topping[3].id = 5006;
objJson.topping[3].type = "Chocolate with Sprinkles";

objJson.topping[2].id = 5003;
objJson.topping[2].type = "Chocolate";

objJson.batters[1].topping[3].id = 5004;
objJson.batters[1].topping[3].type = "Maple";