package com.example.demo.Service;

import com.example.demo.Entity.Elegibility;
import com.example.demo.Repository.ElegibilityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ElegibilityServ {

    @Autowired
    private ElegibilityRepo elegibilityRepo;

    public Elegibility PostMethod(Elegibility elegibility) {
        return elegibilityRepo.save(elegibility);
    }
}
