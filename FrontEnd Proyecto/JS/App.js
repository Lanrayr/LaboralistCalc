new Vue({
    el:'#App',
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
            despidoinjustificado:""
        }
    },

    methods:{
        liquidarTrabajador(){
            const endpoint="http://localhost:8080/liquidacion",
            opciones={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({id:this.id,yearliquidado:this.yearliquidado,nombreempleador:this.nombreempleador,nitempleador:this.nitempleador,nombretrabajador:this.nombretrabajador,cctrabajador:this.cctrabajador,ultimocargo:this.ultimocargo,contratoterminoindf:this.contratoterminoindf,mesescontratoterminofijo:this.mesescontratoterminofijo,ultimosueldo:this.ultimosueldo,auxiliotransporte:this.auxiliotransporte,fechaingreso:this.fechaingreso,fecharetiro:this.fecharetiro,diassemana:this.diassemana,horaingreso:this.horaingreso,horaretiro:this.horaretiro,trabajadomingos:this.trabajadomingos,despidoinjustificado:this.despidoinjustificado})
            };
            fetch(endpoint,opciones).then(async response=>{
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'CLiente Liquidado',
                    showConfirmButton: false,
                    timer: 3000
                  });

            })
    }
}
})
  