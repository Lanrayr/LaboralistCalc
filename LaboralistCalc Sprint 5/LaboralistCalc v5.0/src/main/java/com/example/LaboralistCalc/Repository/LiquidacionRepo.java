package com.example.LaboralistCalc.Repository;

import java.util.ArrayList;

import com.example.LaboralistCalc.Models.LiquidacionModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LiquidacionRepo extends MongoRepository<LiquidacionModel, Long>{
    ArrayList<LiquidacionModel> findByNombretrabajador(String nombretrabajador);
    ArrayList<LiquidacionModel> findByNombreempleador(String nombreempleador);
    ArrayList<LiquidacionModel> findByNitempleador(String nitempleador);
    ArrayList<LiquidacionModel> findByCctrabajador(String cctrabajador);
    ArrayList<LiquidacionModel> findByYearliquidado(String yearliquidado);
}
