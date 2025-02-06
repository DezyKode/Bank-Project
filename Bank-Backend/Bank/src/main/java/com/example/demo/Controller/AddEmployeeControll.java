package com.example.demo.Controller;

import com.example.demo.Entity.AddEmployee;
import com.example.demo.Service.AddEmployeeServ;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/addemployee")
@CrossOrigin("*")
public class AddEmployeeControll {

    @Autowired
    private AddEmployeeServ employeeServ;

    @PostMapping("/post")
    public AddEmployee addEmployee(
            @RequestPart("employee") String employeeJson,  // Use @RequestPart instead of @RequestParam
            @RequestPart("file") MultipartFile file) throws IOException {

        // Convert the employee JSON string into an AddEmployee object
        ObjectMapper objectMapper = new ObjectMapper();
        AddEmployee employee = objectMapper.readValue(employeeJson, AddEmployee.class);

        // Process and save the employee with the file
        return employeeServ.addEmployee(employee, file);
    }
    
    @GetMapping("/get")
    public List<AddEmployee> getEmployee(){
    	return employeeServ.getEmployee();
    }
    
    @GetMapping("/get/{id}")
    public Optional<AddEmployee> getEmployeeById(@PathVariable int id) {
        return employeeServ.getEmployeeById(id);
    }
    
    @PutMapping("/updatepass/{id}")
    public AddEmployee updatePassword(@PathVariable int id, @RequestBody AddEmployee empDetails) {
    	return employeeServ.updatePassword(id, empDetails);
    }
    
    @PutMapping("/updatestatus/{id}")
    public AddEmployee updateStatus(@PathVariable int id, @RequestBody AddEmployee empDetails) {
    	return employeeServ.updateStatus(id, empDetails);
    }
}
