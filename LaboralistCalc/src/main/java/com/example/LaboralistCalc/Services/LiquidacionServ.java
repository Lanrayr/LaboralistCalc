package com.example.LaboralistCalc.Services;

import java.util.ArrayList;

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
}
