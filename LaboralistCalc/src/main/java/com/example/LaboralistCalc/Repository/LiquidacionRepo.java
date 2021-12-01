package com.example.LaboralistCalc.Repository;

import com.example.LaboralistCalc.Models.LiquidacionModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LiquidacionRepo extends MongoRepository<LiquidacionModel, Long>{
    
}
