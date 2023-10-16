function calcularTiempo(){
    let tiempo = new Date ();

    //Variables para la hora
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    //Variables para la fecha
    let dia = tiempo.getDate();
    let mes = tiempo.getMonth()+1;
    let año = tiempo.getFullYear();
    

    //Si la hora, el minuto o segundo es menor a 10 agrega un cero al lado izquierdo
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    //Si el dia, el mes o el año es menor a 10 agrega un cero al lafdo izquierdo
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    año = año < 10 ? "0" + año : año;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo;
    let fechaPantalla = dia + "/" + mes + "/" + año;
    
    let relojDigital = document.querySelector(".reloj");
    let fechaDigital = document.querySelector(".fecha");
    fechaDigital.innerHTML = fechaPantalla;
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo,1000);
