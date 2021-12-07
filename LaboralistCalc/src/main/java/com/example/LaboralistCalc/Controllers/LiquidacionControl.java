package com.example.LaboralistCalc.Controllers;

import java.util.*;

import com.example.LaboralistCalc.Models.LiquidacionModel;
import com.example.LaboralistCalc.Services.LiquidacionServ;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "*",methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.DELETE})
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

    @DeleteMapping(path = "/{id}")
    public boolean eliminar_cliente(@PathVariable("id") Long id){
        return serv.eliminar_cliente(id);
    }

    @GetMapping(path = "/{id}")
    public Optional<LiquidacionModel> consultaPorId(@PathVariable("id") Long id){
        return serv.ObtPorId(id);
    }

    @GetMapping(path = "/buscatrabajador/{nombretrabajador}")
    public ArrayList<LiquidacionModel> buscaPorTrabajador(@PathVariable("nombretrabajador") String nombretrabajador){
        return serv.ObtPorTrabajador(nombretrabajador);
    }

    @GetMapping(path ="/buscaempleador/{nombreempleador}" )
    public ArrayList<LiquidacionModel> buscaPorEmpleador(@PathVariable("nombreempleador") String nombreempleador){
        return serv.ObtPorEmpleador(nombreempleador);
    }

    @GetMapping(path ="/buscanit/{nitempleador}" )
    public ArrayList<LiquidacionModel> buscaPorNIT(@PathVariable("nitempleador") String nitempleador){
        return serv.ObtPorNit(nitempleador);
    }

    @GetMapping(path ="/buscacc/{cctrabajador}")
    public ArrayList<LiquidacionModel> buscaPorCC(@PathVariable("cctrabajador") String cctrabajador){
        return serv.ObtPorCC(cctrabajador);
    }

    @GetMapping(path = "/buscayear/{yearliquidado}")
    public ArrayList<LiquidacionModel> buscaPorYear(@PathVariable("yearliquidado") String yearliquidado){
        return serv.ObtPorYear(yearliquidado);
    }
    

    
    
    
    
}
