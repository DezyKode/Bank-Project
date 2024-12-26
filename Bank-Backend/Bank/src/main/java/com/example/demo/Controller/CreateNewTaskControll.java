package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.CreateNewTask;
import com.example.demo.Service.CreateNewTaskServ;

@RestController
@RequestMapping("/create")
public class CreateNewTaskControll {
	
	@Autowired
	private CreateNewTaskServ createNewTaskServ;
	
	@PostMapping("/task")
	public CreateNewTask createNewTaskControll(@RequestBody CreateNewTask createNewTask) {
		return createNewTaskServ.createNewTaskServ(createNewTask);
	}

}
