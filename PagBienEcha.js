function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color";
}

function copiarAlPortapapeles(hexadecimal) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(hexadecimal).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	document.getElementById("text").innerHTML = "";
}
setInterval (function HoraYFecha(){
    let fechaYHora = new Date();

    let hora = fechaYHora.getHours();
    let min = fechaYHora.getMinutes();
    let seg = fechaYHora.getSeconds();

    let dia = fechaYHora.getDate();
    let mes = fechaYHora.getMonth();
    let año = fechaYHora.getFullYear();
    
    if(hora < 10)
        hora ="0" + hora;
    
    if(min < 10)
        min ="0" + min;

    if(seg < 10)
        seg ="0" + seg;

    if(dia < 10)
        dia ="0" + dia;

    if(mes < 10)
        mes ="0" + mes;

    if(año < 10)
        año ="0" + año;

let fechaYHoraActual = `${hora} : ${min} :${seg} <br> ${dia} - ${mes} - ${año}`;
    
    show = document.getElementById('mostrarFechaYHora');
    show.innerHTML = fechaYHoraActual;

},1000);

