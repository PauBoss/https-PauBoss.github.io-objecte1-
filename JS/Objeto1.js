/**
*Creo una función constructora la cual almacena los puntos
*desde los cuales se accederá.
**/
function Punto(coordenadaX,coordenadaY){
	this.x = coordenadaX;
	this.y = coordenadaY;
	this.mostrarCoordenadas = () => `(${this.x},${this.y})`;
}

//Defino un método que mostarará los puntos por pantalla.
let cambiar = new Punto(15,30)

document.write("Metodo cambiar coordenadas: " + cambiar.mostrarCoordenadas());

//A través del bucle copio y muestro las coordenadas por pantalla
document.write("<br> Metodo copiar coordenadas: ");

for(let coordenadas in cambiar){

	if(typeof cambiar[coordenadas] != "function"){
	document.write("<br>- " + `${coordenadas} tiene el valor ${cambiar[coordenadas]}`);

	}

}

//Por último, creo una función encargada de sumar
Punto.prototype.sumaXY = function(){
	return this.x + this.y;
}

Punto.prototype.z=10;

document.write("<br>Metodo suma coordenadas: (" + cambiar.z + "," + cambiar.sumaXY() + ")");


