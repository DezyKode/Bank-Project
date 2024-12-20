package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.AddEmployee;
import com.example.demo.Repository.AddEmployeeRepo;

@Service
public class AddEmployeeServ {

	@Autowired
	private AddEmployeeRepo addEmployeeRepo;
	
	public AddEmployee addEmployee(AddEmployee employee)
	{
		return addEmployeeRepo.save(employee);
	}
}
