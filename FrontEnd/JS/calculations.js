//MÉTODOS DE CÁLCULO

//DIAS LABORADOS AL AÑO
function calcularFechas(fechaIngreso, fechaSalida){

    var fecha1 = new Date(fechaIngreso), 
    fecha2 = new Date(fechaSalida),

    diffM = fecha2.getMonth() - fecha1.getMonth(),
    diffD = fecha2.getDate() - fecha1.getDate(),
    diffY = fecha2.getFullYear() - fecha1.getFullYear();

    if (fecha2.getMonth() < fecha1.getMonth()){
        diffY --;
        diffM += 12;
    }
    if (fecha2.getDate() < fecha1.getDate()){
        diffM --;
        diffD += 30;
    }

    let resultado = (diffY*360)+(diffM*30)+diffD+1;

    return resultado;

}


//ARRAY HORAS EXTRAS
function arrayHorasExtras(horaInicio, horaFin){

    var listIni = horaInicio.split(":"),
    listFin = horaFin.split(":"),  
    hora1 = parseInt(listIni[0]),
    hora2 = parseInt(listFin[0]),
    min1 = parseInt(listIni[1]),
    min2 = parseInt(listFin[1]),
    horaini = new Date(2001, 1, 1, hora1, min1),
    horafin = new Date(2001, 1, 1, hora2, min2),
    jornadadiurna = new Date(2001, 1, 2, 6, 0),
    jornadanocturna = new Date(2001, 1, 1, 22, 0),
    ordinaria = new Date (2001, 1, 1, 0, 0),
    hed = null,
    hen = null;
    
    if (hora2 < hora1){
        horafin.setDate(horafin.getDate()+1);
    }

    //horas laboradas
    let horaslaboradas = Math.abs((horafin.getTime() - horaini.getTime()) /1000/3600);

    //calculo horas extras 
    if (horaslaboradas > 8) {

        ordinaria.setHours(horaini.getHours()+8, ordinaria.getMinutes()+horaini.getMinutes());
        
        //si solo computa horas extras diurnas
        if((ordinaria.getTime()<jornadanocturna.getTime()) && (horafin.getTime()<jornadanocturna.getTime())){        
            hed = Math.abs((horafin.getTime()-ordinaria.getTime())/1000/3600);
            hen = 0;
        
        // si solo computa horas extras nocturnas
        } else if ((ordinaria.getTime() > jornadanocturna.getTime()) && (horafin.getTime() < jornadadiurna.getTime())){
            hed = 0;
            hen = Math.abs((horafin.getTime()-ordinaria.getTime())/1000/3600);
        
        //si computa primero horas extras diurnas y luego nocturnas
        } else if ((ordinaria.getTime()<jornadanocturna.getTime()) && (horafin.getTime()<jornadadiurna.getTime())){
            hed = Math.abs((jornadanocturna.getTime()-ordinaria.getTime())/1000/3600);
            hen = Math.abs((horafin.getTime()-jornadanocturna.getTime())/1000/3600);
        
        //si computa primero horas extras nocturnas y luego diurnas
        } else {
            hen = Math.abs((jornadadiurna.getTime()-ordinaria.getTime())/1000/3600);
            hed = Math.abs((horafin.getTime()-jornadadiurna.getTime())/1000/3600);
        
            
        } 

    } else { 
        // si no computan horas extras
        hed = 0;
        hen = 0;
    }

    let arrayHoras = [hed, hen];

    return arrayHoras;
}


//PROMEDIO HORAS EXTRAS
function horasExtras(cantHoras, sueldo, diaSemana){

    var hed = parseInt(cantHoras[0]);
    var hen = parseInt(cantHoras[1]);
    let THED = (parseInt(sueldo)/30)*parseInt(diaSemana)*hed*1.25;
    let THEN = (parseInt(sueldo)/30)*parseInt(diaSemana)*hen*1.75;
        
    let total = Math.round((THED+THEN)*4.33);
    return total;
    
};

//PROMEDIO DOMINICALES
function dominicales(cantHoras, sueldo, domingo){
    
    var hed = parseInt(cantHoras[0]);
    var hen = parseInt(cantHoras[1]);
    
    let sumadia = (parseInt(sueldo)/30)*parseInt(domingo)*hed*2;
    let sumanoche = (parseInt(sueldo)/30)*parseInt(domingo)*hen*2.5;
    let total = Math.round((sumadia+sumanoche)*4.33);

    return total;

}

// PROMEDIO RECARGO NOCTURNO
function recargoNocturno(horaInicio, sueldo, domingo, diaSemana){
    const jornadadiurna = new Date(2001, 1, 2, 6, 0),
    jornadanocturna = new Date(2001, 1, 1, 22, 0);

    var listaIni = horaInicio.split(":"),
    hora1 = parseInt(listaIni[0]),
    min1 = parseInt(listaIni[1]),
    horaing = new Date(2001, 1, 1, hora1, min1),
    horasal = new Date(2001, 1, 1, horaing.getHours()+8, min1),
    indRecargo,
    recargoOrdinario,
    recargoDominical,
    total;
    

        // si solo tiene recargo desde la hora de ingreso hasta las 6:00.
    if ((horaing.getTime()>jornadanocturna.getTime())&&(horasal.getTime>jornadadiurna.getTime())){
        indRecargo = Math.abs((jornadadiurna.getTime()-horaing.getTime())/1000/3600);
    
        
        //si solo tiene recargo des las 22:00 hasta la hora de salida.
    } else if ((horaing.getTime()<jornadanocturna.getTime())&&(horasal.getTime<jornadadiurna.getTime)){
        indRecargo = Math.abs((horasal.getTime()-jornadanocturna.getTime())/1000/3600);


        //si tiene recargo desde la hora de ingreso hasta la hora de retiro. 
    } else if ((horaing.getTime()>jornadanocturna.getTime())&&(horasal.getTime()<jornadadiurna.getTime)){
        indRecargo = Math.abs((horasal.getTime()- horaing.getTime())/1000/3600);


        //si no hay recargo nocturno
    } else {
        indRecargo = 0;

    }
    
    recargoOrdinario = Math.round(indRecargo*1.35*4.33*sueldo*diaSemana);
    recargoDominical = Math.round(indRecargo*2.1*4.33*sueldo*domingo);

    total = recargoDominical + recargoOrdinario;

    return total;
    

}


//DIAS LABORADOS DURANTE EL AÑO LIQUIDADO 
function periodoLiquidado(añoLiquidado, fechaIngreso, fechaRetiro){
    var finLaborado = new Date(fechaRetiro),
    finLiquidado = new Date (añoLiquidado, 1, 1),
    inicioLaborado = new Date(fechaIngreso),
    inicioLiquidado = new Date (añoLiquidado, 12, 31),
    diffY,
    diffM,
    diffD;

    let fecha1;
    let fecha2;

        /*condicianal por si la fecha de inicio no está en el año liquidado,
        pero la fecha de retiro sí está en el periodo liquidado*/
    if((inicioLaborado<inicioLiquidado)&&(finLaborado<=finLiquidado)){
        fecha1 = inicioLiquidado;
        fecha2 = finLaborado;

        /*si la fecha de inicio está en el año liquidado, pero la fecha de retino no*/
    } else if((inicioLaborado>=inicioLiquidado)&&(finLaborado>finLiquidado)){
        fecha1 = inicioLaborado;
        fecha2 = finLiquidado;
        
        /*si ninguna fecha está en el año liquidado*/
    } else if((inicioLaborado<inicioLiquidado)&&(finLaborado>finLiquidado)){
        fecha1 = inicioLiquidado;
        fecha2 = finLiquidado;

        /*si ambas fechas están en el año liquidado*/
    } else {
        fecha1 = inicioLaborado;
        fecha2 =  inicioLiquidado;
    }
    
    diffM = fecha2.getMonth() - fecha1.getMonth();
    diffD = fecha2.getDate() - fecha1.getDate();
    diffY = fecha2.getFullYear() - fecha1.getFullYear();

    let resultado = (diffY*360)+(diffM*30)+diffD+1;

    if (resultado < 360){
        total = resultado;
    } else{
        total = 360;
    }

    return total;

}


//CESANTIAS

function totalCesantias(salarioBase, diasLaboradosAño){
    let total = (salarioBase*diasLaboradosAño)/360;
    return total;

}



//INTERESES DE CESANTIAS

function totalInteresesCesantias(cesantias, diasLaboradosAño){
    let total = (cesantias*diasLaboradosAño*0.12)/360;
    return total;

}


//PRIMA DE SERVICIOS

function totalPrimaServicios(salarioBase, diasLaboradosAño){
    let total = (salarioBase*diasLaboradosAño)/360;
    return total;

}

//VACACIONES

function totalVacaciones(sueldo, diasLaboradosAño){
    let total = (sueldo*diasLaboradosAño)/720;
    return total;

}

//INDEMNIZACION CONTRATO A TERMINO FIJO

function totalIndCTF(diasLiquidacion, salarioBase, mesesCTF, CTI){
    let total;
    
    if (CTI === false){
        var indMeses = mesesCTF*30,
        indLiquidar = diasLiquidacion;

        //próroga del contrato se extiende por el tiempo pactado hasta un periodo de 3 meses;
        for (let i = 0; i<2; i++){
            indLiquidar -= indMeses;

            if (indLiquidar < 0){
                break;
            }
        }

        //después de las tres primeras prórrogas, se extiende por un año (360 dias)
         while (indLiquidar>=0){
             indLiquidar -= 360;
         }

        let diasFaltantes = Math.abs(indLiquidar);

        if (diasFaltantes < 15){
            total = salarioBase*15;
        } else {
            total = salarioBase*diasFaltantes;
        }

    } else {
         total = 0;
    }

    return total;
}

//INDEMNIZACION DE CONTRATO A TERMINO INDEFINIDO

function totalIndCTI(diasLiquidacion, salarioBase, CTI){
    var totalCTI,
    salarioDias = salarioBase/30;

    if(CTI === false){

        if (diasLiquidacion>360){
            let valA = 30*salarioDias;
            let valB = 20*salarioDias*(diasLiquidacion-360);

            totalCTI = valA+valB;
        } else {
            totalCTI = 30*salarioDias;
        }

    } else {
        totalCTI = 0;
    }

    return totalCTI;
}


//CÁLCULO DE LIQUIDACION
function calcularLiquidacion(){
    
    //CAPTURA DE VARIABLES
    var añoLiquidado = document.getElementById('añoLiquidado').value, 
    ifDomingo = document.getElementById('domingoSi').checked,
    CTI = document.getElementById('ctiSi').checked,
    sueldo = document.getElementById('sueldo').value,
    auxilioTransporte = document.getElementById('at').value,
    DSJC = document.getElementById('dsjcSi').checked,
    fechaIngreso = document.getElementById('fechaIng').value,
    fechaSalida = document.getElementById('fechaSal').value,
    horaIngreso = document.getElementById('horaIng').value,
    horaSalida = document.getElementById('horaSal').value,
    diaSemana = document.getElementById('dSemana').value,
    mesesCTF = document.getElementById('mesesContrato').value,
    Domingo = 0;
    

    //ARRANQUE DE CALCULOS

    if (ifDomingo ===true){
        Domingo = 1;
        diaSemana --;
    } 

        //para el salario base de liquidación
    let cantHorasExtras = arrayHorasExtras(horaIngreso, horaSalida);
    let totalHorasExtras = parseInt(horasExtras(cantHorasExtras, sueldo, diaSemana));
    document.getElementById('valorHorasExtras').value = totalHorasExtras;
    let totalDominicales = dominicales(cantHorasExtras, sueldo, Domingo);
    document.getElementById('valorDominical').value = totalDominicales;
    let totalRecargoNocturno = recargoNocturno(horaIngreso, sueldo, Domingo, diaSemana);
    document.getElementById('valorRecargoNocturno').value = totalRecargoNocturno;
    let salarioBase = sueldo+totalDominicales+totalRecargoNocturno+totalHorasExtras+auxilioTransporte;
    document.getElementById('totalSalario').value = salarioBase;

/*
        //para prestaciones sociales;
    let diasLaboradosAño = periodoLiquidado(añoLiquidado, fechaIngreso, fechaSalida);
    document.getElementById('diasLaboradosAño').value = diasLaboradosAño;
    let cesantias;
    document.getElementById('cesantias').value = cesantias;
    let interesesCesantias;
    document.getElementById('interesesCesantias').value = interesesCesantias;
    let sancionNoConsignacion;
    document.getElementById('sancionNoConsignacion').value = sancionNoConsignacion;
    let primaServicios;
    document.getElementById('primaServicios').value = primaServicios;
    let vacaciones;
    document.getElementById('vacaciones').value = vacaciones;
    let prestacionesSociales = cesantias+interesesCesantias+sancionNoConsignacion+primaServicios+vacaciones;
    document.getElementById('prestacionesSociales').value = prestacionesSociales;
*/

/*
        //para indemnizaciones;

        let diasLiquidacion = calcularFechas(fechaIngreso, fechaSalida)
        let indemnizacionDespidoCTF;
        let indemnizacionDespidoCTI;
    if (DSJC === true){
        indemnizacionDespidoCTF = totalIndCTF(diasLiquidacion, salarioBase, mesesCTF, CTI);
        indemnizacionDespidoCTI = totalIndCTI(diasLiquidacion, salarioBase, CTI);
    }else{
        indemnizacionDespidoCTF = 0;
        indemnizacionDespidoCTI = 0;
    }

    document.getElementById('indemnizacionDespidoCTF').value = indemnizacionDespidoCTF;
    document.getElementById('indemnizacionDespidoCTI').value = indemnizacionDespidoCTI;
    
    let totalIndemnizaciones = indemnizacionDespidoCTF+indemnizacionDespidoCTI;
    document.getElementById('totalIndemnizaciones').value = totalIndemnizaciones;
    
*/
}

//prueba de retorno de calculos (en consola de HTML)
function testRetornoCalculos(){

    console.log("\nSALARIO BASE");
    console.log("Sueldo: "+document.getElementById('sueldo').value);
    console.log("Auxilio de Transporte: "+document.getElementById('at').value);
    console.log("Dominicales: "+document.getElementById('valorDominical').value);
    console.log("Horas Extras: "+document.getElementById('valorHorasExtras').value);
    console.log("Recargo Nocturno: "+document.getElementById('valorRecargoNocturno').value);
    console.log("Total: "+document.getElementById('totalSalario').value);

    console.log("\nPRESTACIONES SOCIALES");
    console.log("Cesantias: "+document.getElementById('cesantias').value);
    console.log("Intereses sobre cesantias: "+document.getElementById('interesesCesantias').value);
    console.log("Sanción no consinación de intereses: "+document.getElementById('sancionNoConsignacion').value);
    console.log("Prima de servicios: "+document.getElementById('primaServicios').value);
    console.log("Vacaciones: "+document.getElementById('vacaciones').value);
    console.log("Total: "+document.getElementById('prestacionesSociales').value);

    console.log("\nINDEMNIZACIONES");
    console.log("Indemnización por despido (CTF): "+document.getElementById('indemnizacionDespidoCTF').value);
    console.log("Indemnización por despido (CTI): "+document.getElementById('indemnizacionDespidoCTI').value);
    console.log("Total: "+document.getElementById('totalIndemnizaciones').value);
}