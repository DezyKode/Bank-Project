package com.example.demo.Controller;

import com.example.demo.Entity.Elegibility;
import com.example.demo.Service.ElegibilityServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ElegibilityControll {

    @Autowired
    private ElegibilityServ elegibilityServ;

    @PostMapping("/post")
    public ResponseEntity<Elegibility> Post(@RequestBody Elegibility elegibility) {
        return ResponseEntity.ok(elegibilityServ.PostMethod(elegibility));
    }
}
