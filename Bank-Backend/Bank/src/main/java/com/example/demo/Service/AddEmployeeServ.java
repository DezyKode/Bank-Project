package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.AddEmployee;
import com.example.demo.Repository.AddEmployeeRepo;

@Service
public class AddEmployeeServ {

	@Autowired
	private AddEmployeeRepo addEmployeeRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	
	public AddEmployee addEmployee(AddEmployee employee)
	{
		employee.setPassward(passwordEncoder.encode(employee.getPassward()));
		return addEmployeeRepo.save(employee);
	}
}
