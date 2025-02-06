package com.example.demo.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.CreateNewTask;
import com.example.demo.Repository.CreateNewTaskRepo;
import com.twilio.rest.notify.v1.service.Notification.Priority;

@Service
public class CreateNewTaskServ {
	
	@Autowired
	private CreateNewTaskRepo createNewTaskRepo;
	
	public CreateNewTask createNewTaskServ(CreateNewTask createNewTask) {
		return createNewTaskRepo.save(createNewTask);
	}
	
	public List<CreateNewTask> getTask() {
		return createNewTaskRepo.findAll();
	}

	public CreateNewTask updateItem(int id, CreateNewTask itemDetails){
	    CreateNewTask task = createNewTaskRepo.findById(id).orElse(null);
	    
	    if (task != null) {
	        task.setStatus(itemDetails.getStatus());
	        task.setPriority(itemDetails.getPriority());
	        
	        // If status is "Completed", set the completed date
	        if ("Completed".equalsIgnoreCase(itemDetails.getStatus())) {
	            task.setCompleted_date(LocalDate.now().format(DateTimeFormatter.ofPattern("dd MMM yyyy")));
	        }
	        
	        return createNewTaskRepo.save(task);
	    }
	    
	    return null;
	}
}
