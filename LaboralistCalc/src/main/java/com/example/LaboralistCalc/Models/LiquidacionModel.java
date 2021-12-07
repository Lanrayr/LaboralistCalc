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
    
   
    
    
}
