package com.example.LaboralistCalc.Models;

import org.springframework.data.annotation.Id;

public class LiquidacionModel {
    
    @Id
    private Long id;

    private String año_liquidado;
    private String nombre_empleador;
    private String nit_empleador;
    private String nombre_trabajador;
    private String cc_trabajador;
    private String ultimo_cargo;
    private Boolean contrato_termino_indf;
    private String meses_contrato_termino_fijo;
    private String ultimo_sueldo;
    private String auxilio_transporte;
    private String fecha_ingreso;
    private String fecha_retiro;
    private String dias_semana;
    private String hora_ingreso;
    private String hora_retiro;
    private Boolean trabaja_domingos;
    private Boolean desp_sin_justa_causa;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNombre_empleador() {
        return nombre_empleador;
    }
    public void setNombre_empleador(String nombre_empleador) {
        this.nombre_empleador = nombre_empleador;
    }
    public String getNit_empleador() {
        return nit_empleador;
    }
    public void setNit_empleador(String nit_empleador) {
        this.nit_empleador = nit_empleador;
    }
    public String getNombre_trabajador() {
        return nombre_trabajador;
    }
    public void setNombre_trabajador(String nombre_trabajador) {
        this.nombre_trabajador = nombre_trabajador;
    }
    public String getCc_trabajador() {
        return cc_trabajador;
    }
    public void setCc_trabajador(String cc_trabajador) {
        this.cc_trabajador = cc_trabajador;
    }
    public String getUltimo_cargo() {
        return ultimo_cargo;
    }
    public void setUltimo_cargo(String ultimo_cargo) {
        this.ultimo_cargo = ultimo_cargo;
    }
    public Boolean getContrato_termino_indf() {
        return contrato_termino_indf;
    }
    public void setContrato_termino_indf(Boolean contrato_termino_indf) {
        this.contrato_termino_indf = contrato_termino_indf;
    }
    public String getMeses_contrato_termino_fijo() {
        return meses_contrato_termino_fijo;
    }
    public void setMeses_contrato_termino_fijo(String meses_contrato_termino_fijo) {
        this.meses_contrato_termino_fijo = meses_contrato_termino_fijo;
    }
    public String getFecha_ingreso() {
        return fecha_ingreso;
    }
    public void setFecha_ingreso(String fecha_ingreso) {
        this.fecha_ingreso = fecha_ingreso;
    }
    public String getFecha_retiro() {
        return fecha_retiro;
    }
    public void setFecha_retiro(String fecha_retiro) {
        this.fecha_retiro = fecha_retiro;
    }
    public String getDias_semana() {
        return dias_semana;
    }
    public void setDias_semana(String dias_semana) {
        this.dias_semana = dias_semana;
    }
    public String getHora_ingreso() {
        return hora_ingreso;
    }
    public void setHora_ingreso(String hora_ingreso) {
        this.hora_ingreso = hora_ingreso;
    }
    public String getHora_retiro() {
        return hora_retiro;
    }
    public void setHora_retiro(String hora_retiro) {
        this.hora_retiro = hora_retiro;
    }
    public Boolean isTrabaja_domingos() {
        return trabaja_domingos;
    }
    public void setTrabaja_domingos(Boolean trabaja_domingos) {
        this.trabaja_domingos = trabaja_domingos;
    }
    public Boolean isDesp_sin_justa_causa() {
        return desp_sin_justa_causa;
    }
    public void setDesp_sin_justa_causa(Boolean desp_sin_justa_causa) {
        this.desp_sin_justa_causa = desp_sin_justa_causa;
    }
    public String getAño_liquidado() {
        return año_liquidado;
    }
    public void setAño_liquidado(String año_liquidado) {
        this.año_liquidado = año_liquidado;
    }
    public String getUltimo_sueldo() {
        return ultimo_sueldo;
    }
    public void setUltimo_sueldo(String ultimo_sueldo) {
        this.ultimo_sueldo = ultimo_sueldo;
    }
    public String getAuxilio_transporte() {
        return auxilio_transporte;
    }
    public void setAuxilio_transporte(String auxilio_transporte) {
        this.auxilio_transporte = auxilio_transporte;
    }
    public Boolean getTrabaja_domingos() {
        return trabaja_domingos;
    }
    public Boolean getDesp_sin_justa_causa() {
        return desp_sin_justa_causa;
    }
    
    
}
