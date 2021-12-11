


//calcular dias laborados durante todo el contrato laboral
function calcularFechas(){

    ;

    var fecha1 = new Date(document.getElementById('fechaIng').value);
    var fecha2 = new Date(document.getElementById('fechaSal').value);

    var diffM = fecha2.getMonth() - fecha1.getMonth();
    var diffD = fecha2.getDate() - fecha1.getDate();
    var diffY = fecha2.getFullYear() - fecha1.getFullYear();

    if (fecha2.getMonth() < fecha1.getMonth()){
        diffY --;
        diffM += 12;
    }
    if (fecha2.getDate() < fecha1.getDate()){
        diffM --;
        diffD += 30;
    }

    resultado2= (diffY*360)+(diffM*30)+diffD+1;

    document.getElementById('diaslaborados').value = resultado2;

    console.log("dias laborados = "+document.getElementById('diaslaborados').value)

}

//Calcular horas extras
function horasExtras(){

    var listIni = (document.getElementById("horaing").value).split(":"),
    listFin = (document.getElementById("horasal").value).split(":"),  
    hora1 = parseInt(listIni[0]),
    hora2 = parseInt(listFin[0]),
    min1 = parseInt(listIni[1]),
    min2 = parseInt(listFin[1]),
    horaini = new Date(2001, 1, 1, hora1, min1),
    horafin = new Date(2001, 1, 1, hora2, min2),
    jornadadiurna = new Date(2001, 1, 2, 6, 0),
    jornadanocturna = new Date(2001, 1, 1, 22, 0),
    ordinaria = new Date (2001, 1, 1, 0, 0),
    hed = null;
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

    document.getElementById('horasExtrasDiurnas').value = hed;
    document.getElementById('horasExtrasNocturnas').value = hen;

    console.log("horas extras diurnas ="+document.getElementById('horasExtrasDiurnas').value);
    console.log("horas extras nocturnas ="+document.getElementById('horasExtrasNocturnas').value);
}

//determinar dominicales 

function detDominical (){
    var diasxsemana = document.getElementById('dsemana').value;
    var ifdomingo = document.getElementById('domingosi').checked;
    var domingocal = 0;

    if (ifdomingo === true){
        diasxsemana -=1;
        domingocal = 1;
    }

    document.getElementById('diasensemana').value = diasxsemana;
    document.getElementById('domingosuma').value = domingocal;
    console.log("dias laborados entre semana = "+document.getElementById('diasensemana').value);
    console.log("dias laborados en domigo =" + document.getElementById('domingosuma').value);

}

