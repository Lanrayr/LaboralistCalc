package com.example.LaboralistCalc.Models;

import org.springframework.data.annotation.Id;

public class LiquidacionModel {
    
    @Id
    private Long id;
    private String yearliquidado;
    private String nombreempleador;
    private String nitempleador;
    private String nombretrabajador;
    private String cctrabajador;
    private String ultimocargo;
    private Boolean contratoterminoindf;
    private String mesescontratoterminofijo;
    private String ultimosueldo;
    private String auxiliotransporte;
    private String fechaingreso;
    private String fecharetiro;
    private String diassemana;
    private String horaingreso;
    private String horaretiro;
    private Boolean trabajadomingos;
    private Boolean despidoinjustificado;

        //Variables a Calcular
    //Salio Completo
    
    private Double totalsalario;
    private Double horasextras;
    private Double valordominical;

    //prestaciones sociales

    private Double cesantias;
    private Double interesescesantias;
    private Double noconsignacion;
    private Double primaservicios;
    private Double vacaciones;
    private Double totalprestaciones;


    //indemnizaciones

    private Double despidocontratofijo;
    private Double despidocontartoindefinido;
    private Double totalindemnizaciones;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getYearliquidado() {
        return yearliquidado;
    }
    public void setYearliquidado(String yearliquidado) {
        this.yearliquidado = yearliquidado;
    }
    public String getNombreempleador() {
        return nombreempleador;
    }
    public void setNombreempleador(String nombreempleador) {
        this.nombreempleador = nombreempleador;
    }
    public String getNitempleador() {
        return nitempleador;
    }
    public void setNitempleador(String nitempleador) {
        this.nitempleador = nitempleador;
    }
    public String getNombretrabajador() {
        return nombretrabajador;
    }
    public void setNombretrabajador(String nombretrabajador) {
        this.nombretrabajador = nombretrabajador;
    }
    public String getCctrabajador() {
        return cctrabajador;
    }
    public void setCctrabajador(String cctrabajador) {
        this.cctrabajador = cctrabajador;
    }
    public String getUltimocargo() {
        return ultimocargo;
    }
    public void setUltimocargo(String ultimocargo) {
        this.ultimocargo = ultimocargo;
    }
    public Boolean getContratoterminoindf() {
        return contratoterminoindf;
    }
    public void setContratoterminoindf(Boolean contratoterminoindf) {
        this.contratoterminoindf = contratoterminoindf;
    }
    public String getMesescontratoterminofijo() {
        return mesescontratoterminofijo;
    }
    public void setMesescontratoterminofijo(String mesescontratoterminofijo) {
        this.mesescontratoterminofijo = mesescontratoterminofijo;
    }
    public String getUltimosueldo() {
        return ultimosueldo;
    }
    public void setUltimosueldo(String ultimosueldo) {
        this.ultimosueldo = ultimosueldo;
    }
    public String getAuxiliotransporte() {
        return auxiliotransporte;
    }
    public void setAuxiliotransporte(String auxiliotransporte) {
        this.auxiliotransporte = auxiliotransporte;
    }
    public String getFechaingreso() {
        return fechaingreso;
    }
    public void setFechaingreso(String fechaingreso) {
        this.fechaingreso = fechaingreso;
    }
    public String getFecharetiro() {
        return fecharetiro;
    }
    public void setFecharetiro(String fecharetiro) {
        this.fecharetiro = fecharetiro;
    }
    public String getDiassemana() {
        return diassemana;
    }
    public void setDiassemana(String diassemana) {
        this.diassemana = diassemana;
    }
    public String getHoraingreso() {
        return horaingreso;
    }
    public void setHoraingreso(String horaingreso) {
        this.horaingreso = horaingreso;
    }
    public String getHoraretiro() {
        return horaretiro;
    }
    public void setHoraretiro(String horaretiro) {
        this.horaretiro = horaretiro;
    }
    public Boolean getTrabajadomingos() {
        return trabajadomingos;
    }
    public void setTrabajadomingos(Boolean trabajadomingos) {
        this.trabajadomingos = trabajadomingos;
    }
    public Boolean getDespidoinjustificado() {
        return despidoinjustificado;
    }
    public void setDespidoinjustificado(Boolean despidoinjustificado) {
        this.despidoinjustificado = despidoinjustificado;
    }
    public Double getTotalsalario() {
        return totalsalario;
    }
    public void setTotalsalario(Double totalsalario) {
        this.totalsalario = totalsalario;
    }
    public Double getHorasextras() {
        return horasextras;
    }
    public void setHorasextras(Double horasextras) {
        this.horasextras = horasextras;
    }
    public Double getValordominical() {
        return valordominical;
    }
    public void setValordominical(Double valordominical) {
        this.valordominical = valordominical;
    }
    public Double getCesantias() {
        return cesantias;
    }
    public void setCesantias(Double cesantias) {
        this.cesantias = cesantias;
    }
    public Double getInteresescesantias() {
        return interesescesantias;
    }
    public void setInteresescesantias(Double interesescesantias) {
        this.interesescesantias = interesescesantias;
    }
    public Double getNoconsignacion() {
        return noconsignacion;
    }
    public void setNoconsignacion(Double noconsignacion) {
        this.noconsignacion = noconsignacion;
    }
    public Double getPrimaservicios() {
        return primaservicios;
    }
    public void setPrimaservicios(Double primaservicios) {
        this.primaservicios = primaservicios;
    }
    public Double getVacaciones() {
        return vacaciones;
    }
    public void setVacaciones(Double vacaciones) {
        this.vacaciones = vacaciones;
    }
    public Double getTotalprestaciones() {
        return totalprestaciones;
    }
    public void setTotalprestaciones(Double totalprestaciones) {
        this.totalprestaciones = totalprestaciones;
    }
    public Double getDespidocontratofijo() {
        return despidocontratofijo;
    }
    public void setDespidocontratofijo(Double despidocontratofijo) {
        this.despidocontratofijo = despidocontratofijo;
    }
    public Double getDespidocontartoindefinido() {
        return despidocontartoindefinido;
    }
    public void setDespidocontartoindefinido(Double despidocontartoindefinido) {
        this.despidocontartoindefinido = despidocontartoindefinido;
    }
    public Double getTotalindemnizaciones() {
        return totalindemnizaciones;
    }
    public void setTotalindemnizaciones(Double totalindemnizaciones) {
        this.totalindemnizaciones = totalindemnizaciones;
    }
    
    
   
    
    
}
