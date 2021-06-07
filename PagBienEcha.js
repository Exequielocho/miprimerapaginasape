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

