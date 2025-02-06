package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.CreateNewTask;
import com.example.demo.Service.CreateNewTaskServ;

@RestController
@CrossOrigin("*")
@RequestMapping("/create")
public class CreateNewTaskControll {
	
	@Autowired
	private CreateNewTaskServ createNewTaskServ;
	
	@PostMapping("/task")
	public CreateNewTask createNewTaskControll(@RequestBody CreateNewTask createNewTask) {
		return createNewTaskServ.createNewTaskServ(createNewTask);
	}
	
	@GetMapping("/gettask")
	public List<CreateNewTask> getTask(){
		return createNewTaskServ.getTask();
	}
	
	@PutMapping("/update/{id}") 
	public CreateNewTask updateItem(@PathVariable int id, @RequestBody CreateNewTask statusDetails) {
	    return createNewTaskServ.updateItem(id, statusDetails);
	}
}
