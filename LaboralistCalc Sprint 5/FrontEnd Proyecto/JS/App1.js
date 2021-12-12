new Vue({
    el:"#App1",
    data(){
        return{

        id:"",
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
        datosconsulta:{},

         //variables de cálculo y output
         totalsalario:"",
         horasextras:"",
         valordominical:"",
         cesantias:"",
         intesescesantias:"",
         noconsignacion:"",
         primaservicios:"",
         vacaciones:"",
         totalprestaciones:"",
         despidocontratofijo:"",
         despidocontratoindefinido:"",
         totalindemnizaciones:"",
         diaslaborados:""       
        }
    },

    methods:{
        Consultar(){
            endpoint="http://localhost:8080/liquidacion"
            fetch(endpoint).then(async response=>{
                this.datosconsulta=await response.json();
            })
        },

         //método para contabilizar horas (funciona). 
         cuentaHoras(hi, mi, hf, mf){
             var diferencia=0;

            if (mi >= mf){
             mf = mf + 24;   
            }
            
            xmin = mf - mi;
            xhor = hf - hi;

            
            if (xmin < 0){
                xhor --;
                xmin = 60+xmin;
            }

            horas = xhor;
            minutos = xmin/60;

            if (minutos > 0.5){
                minutos = 1;
            } else if (minutos < 0.5){
                minutos = 0;
            }

            diferencia = horas+minutos;

            return (diferencia);
            
        },

        SelectClient(){
            var Sel=null;
            if(Sel==false){
                alert(this.datosconsulta)
            }
            else{
                Sel==this.datosconsulta;
            }
            return Sel;

        },

        Alerta(){
            alert(this.Sel);
        },

        //método para calcular días de dos fechas en calendario comercial (mes=30 y año=360). 
        cuentaFechas(fechainicio, fechafin){
            var listafechaini = fechainicio.split("/"),
            listafechafin = fechafin.split("/");

            var yearini = parseFloat(listafechaini[2]),
            yearfin = parseFloat(listafechafin[2]),
            monthini = parseFloat(listafechaini[1]),
            monthfin = parseFloat(listafechafin[1]),
            dayini = parseFloat(listafechaini[0]),
            dayfin = parseFloat(listafechafin[0]);

            xday = dayfin - dayini;
            xmonth = monthfin - monthini;
            xyear = yearfin - yearini;

            if (xday < 0){
                xmonth --;
                xday = 30+xday;                
            }
            if (xmonth < 0){
                xyear --;
                xmonth = 12+xmonth;
            }

            monthinday = xmonth*30;
            yearinday = xday*360;

            totaldias = monthinday+yearinday+xday+1;

            return totaldias;
        },

        //método para calcular los días laborados durante el periodo de trabajo.
        totalDiasLaborados(){
            var fingreso = this.fechaingreso,
            fretiro = this.fecharetiro;

            totaldiaslaborados = this.cuentaFechas(fingreso, fretiro);
            return this.totalDiasLaborados;
        },

        //método para calcular horas extras diurnas y nocturnas.

        totalHorasExtras(){
            
            //total
            var totalhex = 0;
            //variables de input
            var horaentrada = this.horaingreso,
            horasalida = this.horaretiro,
            diaslabo = parseInt(this.diaslaborados),
            ifdomingo = this.trabajadomingos,
            listaentrada = horaentrada.split(":"),
            listasalida = horasalida.split(":"),
            salariodiario = Math.round(parseFloat(this.ultimosueldo)/30);


            //conversión de las horas de input en array list
            var h1 = parseInt(listaentrada[0]),
            h2 = parseInt(listasalida[0]),
            m1 = parseInt (listaentrada[1]),
            m2 = parseInt (listasalida[1]);
            

            //contadores de horas extras
            var hexdiur = 0,
            hexnoc = 0, 
            recnoc = 0;

            //controlador de jornada ordinaria de 8 horas (para calcular si hay recargo nocturno)
            var ifrecargo = false;
            var ordinaria = h1 + 8,
            ho = 0,
            mo  = 0;
            if (ordinaria >= 24){
                ordinaria = ordinaria-24;
            }
            if (ordinaria > 21 || ordinaria < 6){
                ifrecargo=true;
                ho = ordinaria;
                mo = m1;
            }

            
            //controlador si trabaja en domingos; 
            if (ifdomingo === true){ 
                promediomensual = ((diaslabo-1)*52)/12;
            } else  promediomensual = (diaslabo*52)/12;


            //caso 1: trabaja sin recargo nocturno y sin horas extras nocturnas
            if (ifrecargo===false && h2 < 21){
                hexdiur = (this.cuentaHoras(h1, m1, h2, m2))-8;
                if (hexdiur < 0){
                    hexdiur = 0;
                }
            //caso 2: trabaja sin recargo nocturno y con horas extras nocturnas    
            } else  if (ifrecargo===false && h2 >= 21){
                hexdiur = (this.cuentaHoras(ho, mo, 21, 0));
                hexnoc = (this.cuentaHoras(21, 0, h2, m2));
            
            //caso 3: trabaja con recargo nocturno y sin horas extras nocturnas
            } else if (ifrecargo===true && h2 > 6){
                recnoc = this.cuentaHoras(21, 0, ho, mo);
                hexdiur = this.cuentaHoras(6, 0, h2, m2);

            //caso 4: trabaja con recargo nocturno y con horas extras nocturnas
            } else if (ifrecargo===true && h2 < 6){
                recnoc = this.cuentaHoras(21, 0, ho, mo);
                hexnoc = this.cuentaHoras(ho, mo, h2, m2);
            }

            //cálculos finales (promedio mensual de 30 días)
            totalhex = (promediomensual*hexdiur*(salariodiario*1.25))+(promediomensual*hexnoc*(salariodiario*1.75))+(promediomensual*recnoc*(salariodiario*1.35));
            return totalhex


        },


        //método para calcular dominicales
        totalDominical(){
            var totaldominical = 0,
            ifdominical = this.trabajadomingos;

            if (ifdominical===true){
                
                //variables de input
                var horaentrada = this.horaingreso,
                horasalida = this.horaretiro,
                listaentrada = horaentrada.split(":"),
                listasalida = horasalida.split(":"),
                salariodiario = Math.round(parseFloat(this.ultimosueldo)/30);
                
                //conversión de las horas de input en array list
                var h1 = parseInt(listaentrada[0]),
                h2 = parseInt(listasalida[0]),
                m1 = parseInt (listaentrada[1]),
                m2 = parseInt (listasalida[1]),
                promediomensual = 52/12;

                //contadores de horas extras
                var hexdiur = 0,
                hexnoc = 0, 
                recnoc = 0;

                //controlador de jornada ordinaria de 8 horas (para calcular si hay recargo nocturno)
                var ifrecargo = false;
                var ordinaria = h1 + 8,
                ho = 0,
                mo  = 0;
                if (ordinaria >= 24){
                    ordinaria = ordinaria-24;
                }
                if (ordinaria > 21 || ordinaria < 6){
                    ifrecargo=true;
                    ho = ordinaria;
                    mo = m1;
                }
                

                //caso 1: trabaja sin recargo nocturno y sin horas extras nocturnas
                if (ifrecargo===false && h2 < 21){
                    hexdiur = (this.cuentaHoras(h1, m1, h2, m2))-8;
                    if (hexdiur <= 0){
                    hexdiur = 0;
                    horasdominicales = this.cuentaHoras(h1, m1, h2, m2);

                    }

                //caso 2: trabaja sin recargo nocturno y con horas extras nocturnas
                } else  if (ifrecargo===false && h2 >= 21){
                    hexdiur = (this.cuentaHoras(ho, mo, 21, 0));
                    hexnoc = (this.cuentaHoras(21, 0, h2, m2));

                //caso 3: trabaja con recargo nocturno y sin horas extras nocturnas
                } else if (ifrecargo===true && h2 > 6){
                    recnoc = this.cuentaHoras(21, 0, ho, mo);
                    hexdiur = this.cuentaHoras(6, 0, h2, m2);
                } else if (ifrecargo===true && h2 < 6){
                    recnoc = this.cuentaHoras(21, 0, ho, mo);
                    hexnoc = this.cuentaHoras(ho, mo, h2, m2);
                
                //caso 4: trabaja con recargo nocturno y con horas extras nocturnas
                } else if (ifrecargo===true && h2 < 6){
                    recnoc = this.cuentaHoras(21, 0, ho, mo);
                    hexnoc = this.cuentaHoras(ho, mo, h2, m2);
                }
                
                //cálculos finales (promedio mensual de 30 días)
                totaldominical = (promediomensual*horasdominicales*(salariodiario*1.75))+(promediomensual*hexdiur*(salariodiario*2))+(promediomensual*hexnoc*(salariodiario*2.5))+(promediomensual*recnoc*(salariodiario*2.1));

            }else totaldominical = 0;

            return totaldominical;

        },

        //método para sumar el salario base de liquidación (funciona)
        sumaSalarioBase(){
            var sueldo = this.ultimosueldo,
            auxilio = this.auxiliotransporte,
            sumasalario =  parseFloat(sueldo)+parseFloat(auxilio)+this.totalHorasExtras()+this.totalDominical();
            
            return sumasalario;
        },
        
        //método para calcular cesantías
        totalCesantias(){
            var cesantias = Math.round((this.sumaSalarioBase()*this.totalDiasLaborados())/360);
            return cesantias;
        },

        //método para calcular inteses de cesantías
        totalInteresesCesantias(){
            var interescesantias = Math.round((this.totalCesantias()*this.totalDiasLaborados()*0.12)/360);
            return interescesantias;
        },

        //Método para calcular sanción de no consignación de intereses de cesantías

        totalSancionIntereses(){
            var sancionintereses = this.totalInteresesCesantias();
            return sancionintereses;
        },

        //método para calcular prima de servicios

        totalPrimaServicios(){
            var diaslaborad = this.totalDiasLaborados(),
            primaserv = 0;

            if (diaslaborad = 360){
                primaserv = this.sumaSalarioBase();
            } else if (diaslaborad < 360 && diaslaborad > 180){
                primaserv = Math.round((this.sumaSalarioBase()/2)+((this.sumaSalarioBase()*diaslaborad)/360));
            } else if (diaslaborad < 180){
                primaserv = Math.round((this.sumaSalarioBase()*diaslaborad)/360);
            }

            return primaserv;
        },
        
        //método para calcular vacaciones

        totalVacaciones(){
            var diaslaborad = this.totalDiasLaborados(),
            sueldo = parseFloat(this.ultimosueldo());
            vacaciones = Math.round((diaslaborad*sueldo)/720);

            return vacaciones

        },

        //método para calcular total de prestaciones sociales

        totalPrestaciones(){
            var prestaciones = this.totalCesantias()+this.totalInteresesCesantias()+this.totalPrimaServicios+this.totalVacaciones();
            return prestaciones;
        },

    }
})