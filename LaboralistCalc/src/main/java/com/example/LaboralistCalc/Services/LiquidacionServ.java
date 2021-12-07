package com.example.LaboralistCalc.Services;

import java.util.*;

import com.example.LaboralistCalc.Models.LiquidacionModel;
import com.example.LaboralistCalc.Repository.LiquidacionRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LiquidacionServ {
    
    @Autowired
    LiquidacionRepo repo;

    public LiquidacionModel saveLiquidacion(LiquidacionModel lModel){
        return repo.save(lModel);
    }

    public ArrayList<LiquidacionModel> consultaTodos(){
        return (ArrayList<LiquidacionModel>) repo.findAll();
    }

    public boolean eliminar_cliente(Long id){
        if(repo.existsById(id)){
            repo.deleteById(id);
            return true;
        }
        else{
            return false;
        }
    }

    public Optional<LiquidacionModel> ObtPorId(Long id){
        return repo.findById(id);
    }

    public ArrayList<LiquidacionModel> ObtPorTrabajador(String nombretrabajador){
        return repo.findByNombretrabajador(nombretrabajador);
    }

    public ArrayList<LiquidacionModel> ObtPorEmpleador(String nombreempleador){
        return repo.findByNombreempleador(nombreempleador);

    }

    public ArrayList<LiquidacionModel> ObtPorNit( String nitempleador){
        return repo.findByNitempleador(nitempleador);
    }

    public ArrayList<LiquidacionModel> ObtPorCC( String cctrabajador){
        return repo.findByCctrabajador(cctrabajador);
    }

    public ArrayList<LiquidacionModel> ObtPorYear(String yearliquidado){
        return repo.findByYearliquidado(yearliquidado);
    }



}
