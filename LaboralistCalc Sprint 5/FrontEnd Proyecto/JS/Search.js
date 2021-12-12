new Vue({
    el:"#Search",
    data(){
        return{
            //Variable ID
            id:"",

            //Variables del Input
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
            nombrebuscarT:"",
            datosbuscarnombreT:{}
        }
    },
    methods:{
        BuscaNombreT(){
            var endpoint=`http://localhost:8080/liquidacion/buscatrabajador/${this.nombrebuscarT}`;
            var opciones={method:'GET'};
            fetch(endpoint,opciones).then(async response=>{
                this.datosbuscarnombreT=await response.json();
            })
        },

        suma(a,b){
            var a= this.ultimosueldo;
            var b=100000;
            var C= a+b;
            return  C;
        },

        Liquid(){
            alert(2+4);
        }

    }
})