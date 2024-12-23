package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.CreateNewTask;
import com.example.demo.Repository.CreateNewTaskRepo;

@Service
public class CreateNewTaskServ {
	
	@Autowired
	private CreateNewTaskRepo createNewTaskRepo;
	
	public CreateNewTask createNewTaskServ(CreateNewTask createNewTask) {
		
		return createNewTaskRepo.save(createNewTask);
	}

}
