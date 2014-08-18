// DOCUMENT OBJECT MODEL
//Objeto
//	variables
//	Funciones

// Los 3 principales OBJETOS de JS son: navigator, window y document

function Pokemon (n, v, a, g) {
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.grito = g;
	this.gritar = function() {
		alert(this.grito);
	}
}

var pikachu, bulbasaur;
function crear () {
	// Creamos los 2 Pokemones para la Batalla
	pikachu = new Pokemon("Pikachu", 100, 55, "Pika!");
	bulbasaur = new Pokemon("Bulbasaur", 100, 50, "bulbasaurr");	
}

function inicio () {
	//console.log("INICIA");
	crear();
	
	//Informacion pokemon 1
	var datoNombre = document.getElementById('nombrePokemon');
	datoNombre.innerHTML = "<strong>Nombre: </strong>" + pikachu.nombre;
	
	var vidaPoke = document.getElementById('vidaPokemon');
	vidaPoke.innerHTML = "<strong>Vida: </strong>" + pikachu.vida;
	var ataquePoke = document.getElementById('ataquePokemon');
	ataquePoke.innerHTML = "<strong>Ataque: </strong>" + pikachu.ataque;
	var gritoPoke = document.getElementById('gritoPokemon');
	gritoPoke.innerHTML = "<strong>Grito: </strong>" + pikachu.grito;

	var imagen = document.getElementById('imgPoke');
	imagen.src = "img/" + pikachu.nombre.toLowerCase() + ".png";//"pikachu.png";
	imagen.style.width = '100px';
	imagen.style.height = '100px';
    imagen.style.backgroundPosition ="center";

    var turnoPoke = document.getElementById('turnoPokemon');
	turnoPoke.innerHTML = "Turno = 0";


    //Informacion pokemon 2
    var datoNombre2 = document.getElementById('nombrePokemon2');
	datoNombre2.innerHTML = "<strong>Nombre: </strong>" + bulbasaur.nombre;
	
	var vidaPoke2 = document.getElementById('vidaPokemon2');
	vidaPoke2.innerHTML = "<strong>Vida: </strong>" + bulbasaur.vida;
	var ataquePoke2 = document.getElementById('ataquePokemon2');
	ataquePoke2.innerHTML = "<strong>Ataque: </strong>" + bulbasaur.ataque;
	var gritoPoke2 = document.getElementById('gritoPokemon2');
	gritoPoke2.innerHTML = "<strong>Grito: </strong>" + bulbasaur.grito;

	var imagen2 = document.getElementById('imgPoke2');
	imagen2.src = "img/" + bulbasaur.nombre.toLowerCase() + ".png";
	imagen2.style.width = '100px';
	imagen2.style.height = '100px';
    imagen2.style.backgroundPosition ="center";

    var turnoPoke2 = document.getElementById('turnoPokemon2');
	turnoPoke2.innerHTML = "Turno = 1";

    //Turno para la Batalla
    document.getElementById('turno').innerHTML = "Es el Turno de: " + pikachu.nombre;
}

var turno = 0;
function battle () {
	console.log(turno);
	
	if (pikachu.vida > 0 && bulbasaur.vida > 0) {
		if (turno == 0) {
			bulbasaur.vida = bulbasaur.vida - pikachu.ataque;
			turno = 1;
			document.getElementById('vidaPokemon2').innerHTML = "<strong style = 'color:red;'>Vida: " + bulbasaur.vida + "</strong>";
			document.getElementById('turno').innerHTML = "Es el Turno de: " + bulbasaur.nombre;
		} else{
			pikachu.vida = pikachu.vida - bulbasaur.ataque;
			turno = 0;
			document.getElementById('vidaPokemon').innerHTML = "<strong style = 'color:red;'>Vida: " + pikachu.vida + "</strong>";
			document.getElementById('turno').innerHTML = "Es el Turno de: " + pikachu.nombre;
		}
	}

	if (pikachu.vida > 0 && bulbasaur.vida <= 0) {
		resultado("Gano: " + pikachu.nombre + " <br /> Perdio: " + bulbasaur.nombre);
	}
	if (pikachu.vida <= 0 && bulbasaur.vida > 0) {
		resultado("Gano: " + bulbasaur.nombre + " <br /> Perdio: " + pikachu.nombre);
	}
}

function resultado (battlePoke) {
	alert(battlePoke);
	document.getElementById('resultado').innerHTML = battlePoke;
}

function reset () {
	crear();
	inicio();
	document.getElementById('resultado').innerHTML = "";
}