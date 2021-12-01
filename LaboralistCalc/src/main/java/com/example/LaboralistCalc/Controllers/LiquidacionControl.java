package com.example.LaboralistCalc.Controllers;

import java.util.ArrayList;

import com.example.LaboralistCalc.Models.LiquidacionModel;
import com.example.LaboralistCalc.Services.LiquidacionServ;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/liquidacion")
public class LiquidacionControl {
    
    @Autowired
    LiquidacionServ serv;

    @PostMapping()
    public LiquidacionModel saveLiquidacion(@RequestBody LiquidacionModel lModel){
        return serv.saveLiquidacion(lModel);
    }

    @GetMapping()
    public ArrayList<LiquidacionModel> consultaTodos(){
        return serv.consultaTodos();
    }
}
