new Vue({
    el:'#App',
    data(){
        return{
            //variable ID
            id:"",

            //variables de input
            yearliquidado:"",
            nombreempleador:"",
            nitempleador:"",
            nombretrabajador:"",
            cctrabajador:"",
            ultimocargo:"",
            contratoterminoindf:"",
            mesescontratoterminofijo:"",
            ultimosueldo:"",
            auxiliotransporte:"",
            fechaingreso:"",
            fecharetiro:"",
            diassemana:"",
            horaingreso:"",
            horaretiro:"",
            trabajadomingos:"",
            despidoinjustificado:"",
            diaslaborados:"",
            cesantias: "",
            valordominical:"",
            cesantias: "",
            interesescesantias: "",
            totalsalario: "",
            horasextras: "",
            valordominical: "", 
            diaslaborados: "",
            cesantias: "",
            interesescesantias: "",
            noconsignacion: "",
            primaservicios: "",
            vacaciones: "",
            totalprestaciones: "",
            totalindemnizaciones: "",
        }
    },

    methods:{

        //DOMINICALES
        dominicalTotal(){
            var HED = parseInt(document.getElementById('horasExtrasDiurnas').value);
            var HEN = parseInt(document.getElementById('horasExtrasNocturnas').value);
            var sueldo = parseInt(document.getElementById('sueldo').value);
            var diadomingo = parseInt(document.getElementById('domingosuma').value);
            
            var sumadia = (sueldo/30)*diadomingo*HED*2;
            var sumanoche = (sueldo/30)*diadomingo*HEN*2.5;
            var total = Math.round((sumadia+sumanoche)*4.33);

            return total;

        },
        
        //HORAS EXTRAS DIURNAS Y NOCTURNAS


        promHorasExtras(){
            var HED = parseInt(document.getElementById('horasExtrasDiurnas').value);
            var HEN = parseInt(document.getElementById('horasExtrasNocturnas').value);
            var sueldoDiario = parseInt(document.getElementById('sueldo').value);
            var dias = parseInt(document.getElementById('diasensemana').value);
            var THED;
            var THEN;
            var total;
        
            THED = (sueldoDiario/30)*dias*HED*1.25;
            THEN = (sueldoDiario/30)*dias*HEN*1.75;
        
            total = Math.round((THED+THEN)*4.33);
            return total;
        },

        //SALARIO BASE LIQUIDACION
        salarioBase(){
            var sueldo = parseInt(document.getElementById('sueldo').value);
            var auxilioTransporte = parseInt(document.getElementById('at').value);
            var horasExt = parseInt(this.promHorasExtras());
            var dominical = parseInt(this.dominicalTotal());
            var total = sueldo+auxilioTransporte+horasExt+dominical;
            return total;
        },

        //DIAS LABORADOS EN EL ÚLTIMO PERIODO ANUAL;

        ultimoanio(){
            var fecharetiro = new Date(document.getElementById('fechaSal').value);
            var inicioanio = new Date();

            inicioanio.setFullYear(fecharetiro.getFullYear(), 1, 1);

            var diffM = fecharetiro.getMonth() - inicioanio.getMonth();
            var diffD = fecharetiro.getDate() - inicioanio.getDate();
            var diffY = fecharetiro.getFullYear() - inicioanio.getFullYear();
        
            if (fecharetiro.getMonth() < inicioanio.getMonth()){
                diffY --;
                diffM += 12;
            }
            if (fecharetiro.getDate() < inicioanio.getDate()){
                diffM --;
                diffD += 30;
            }
        
            var resultado2= (diffY*360)+(diffM*30)+diffD+1;

            return resultado2;

        },

        //CESANTIAS
        cesantias(){
            var salariobase = parseInt(this.salarioBase());
            var diaslaborados = parseInt(this.ultimoanio());

            var cesantias = Math.round((salariobase*diaslaborados)/360);
            return cesantias
        },

        //INTERESES CESANTIAS

        intresesCesantias(){
            var cesantias = parseInt(this.cesantias());
            var diaslaborados = parseInt(this.ultimoanio());

            var intereses = Math.round((cesantias*diaslaborados*0.12)/360);
            return intereses;
        },

        //PRIMA SERVICIOS
        primaServicios(){
            var salariobase = parseInt(this.salarioBase());
            var dias = parseInt(this.ultimoanio());

            var prima = Math.round((salariobase*dias)/360);
            return prima;
        },

        //VACACIONES

        vacaciones(){
            var sueldo = parseInt(document.getElementById('sueldo').value);
            var diaslaborados = parseInt(this.ultimoanio());
            var vacaciones = Math.round((sueldo*diaslaborados)/720);

            return vacaciones;
        },

        //PRESTACIONES SOCIAlES

        pretacionesSociales(){
            var cesantias = parseInt(this.cesantias());
            var intesescesantias = parseInt(this.intresesCesantias());
            var sancionintereses = parseInt(this.intresesCesantias());
            var primaservicios = parseInt(this.primaServicios());
            var vacaciones = parseInt(this.vacaciones());

            var total = cesantias+intesescesantias+sancionintereses+primaservicios+vacaciones;
            return total;

        },

        //INDEMNIZACION DESPIDO SIN JUSTA CAUSA

        indemnizacion(){
            var procedeindemnizar = document.getElementById('').checked;
            var terminofijo = document.getElementById('').checked;
            var  indemnizacion;

            if (procedeindemnizar === true){

            } else { indemnizacion = 0;}

            return indemnizacion;
        },

        //método para subir los datos a MongoDB
        liquidarTrabajador(){
            const endpoint="http://localhost:8585/liquidacion",
            opciones={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    id:this. id,
                    yearliquidado: this.yearliquidado,
                    nombreempleador: this.nombreempleador,
                    nitempleador: this.nitempleador,
                    nombretrabajador: this.nombretrabajador,
                    cctrabajador: this.cctrabajador,
                    ultimocargo: this.ultimocargo,
                    contratoterminoindf: this.contratoterminoindf,
                    mesescontratoterminofijo: this.mesescontratoterminofijo,
                    ultimosueldo: this.ultimosueldo,
                    auxiliotransporte: this.auxiliotransporte,
                    fechaingreso: this.fechaingreso,
                    fecharetiro: this.fecharetiro,
                    diassemana: this.diassemana,
                    horaingreso: this.horaingreso,
                    horaretiro: this.horaretiro,
                    trabajadomingos: this.trabajadomingos,
                    despidoinjustificado:this.despidoinjustificado,
                    diaslaborados: document.getElementById("diaslaborados").value,
                    horasextras: document.getElementById("valorhorasextras").value,
                    valordominical: this.dominicalTotal(),
                    totalsalario: this.salarioBase(),
                    horasextras: this.promHorasExtras(),
                    valordominical: this.dominicalTotal(), 
                    diaslaborados: document.getElementById('diaslaborados').value,
                    cesantias: this.cesantias(),
                    interesescesantias: this.intresesCesantias(),
                    noconsignacion: this.intresesCesantias(),
                    primaservicios: this.primaServicios(),
                    vacaciones: this.vacaciones(),
                    totalprestaciones: this.pretacionesSociales(),
                    totalindemnizaciones: this.indemnizacion(),              
                    
                })
            };
            fetch(endpoint,opciones).then(async response=>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Cliente Liquidado',
                    showConfirmButton: false,
                    timer: 3000
                  });

            })
    }
}
})
  