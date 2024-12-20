package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.AddEmployee;
import com.example.demo.Service.AddEmployeeServ;

@RestController
@RequestMapping("/addemployee")
@CrossOrigin("*")
public class AddEmployeeControll {

	@Autowired
	private AddEmployeeServ employeeServ;
	
	@PostMapping("/post")
	public AddEmployee addEmployee (@RequestBody AddEmployee employee)
	{
		return employeeServ.addEmployee(employee);
	}
}
