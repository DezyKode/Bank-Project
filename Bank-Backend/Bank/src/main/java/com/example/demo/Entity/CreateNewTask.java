package com.example.demo.Entity;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "employeeTask")
public class CreateNewTask {

	@jakarta.persistence.Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	
	@Column(name = "Task_Title")
	private String task_title;
	
	@Column(name = "Assign_To")
	private String assign_to;
	
	@Column(name = "Task_Description")
	private String task_description;
	
	@Column(name = "Create_Date")
	private String create_date;
	
	@Column(name = "Due_Date")
	private String due_date;
	
	@Column(name = "Priority")
	private String priority;
	
	@Column(name = "Status")
	private String status = "ToDo";
	
	@Column(name = "Completed_Date")
	private String completed_date = "N/A";

	
	@PrePersist
	public void setCreateDate() {
		if (this.create_date == null) {  // Set only if create_date is not already set
			this.create_date = LocalDate.now().format(DateTimeFormatter.ofPattern("dd MMM yyyy")); // Current date in "14 Sep 2024" format
		}
	}


	public int getId() {
		return Id;
	}


	public void setId(int id) {
		Id = id;
	}


	public String getTask_title() {
		return task_title;
	}


	public void setTask_title(String task_title) {
		this.task_title = task_title;
	}


	public String getAssign_to() {
		return assign_to;
	}


	public void setAssign_to(String assign_to) {
		this.assign_to = assign_to;
	}


	public String getTask_description() {
		return task_description;
	}


	public void setTask_description(String task_description) {
		this.task_description = task_description;
	}


	public String getCreate_date() {
		return create_date;
	}


	public void setCreate_date(String create_date) {
		this.create_date = create_date;
	}


	public String getDue_date() {
		return due_date;
	}


	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}


	public String getPriority() {
		return priority;
	}


	public void setPriority(String priority) {
		this.priority = priority;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getCompleted_date() {
		return completed_date;
	}


	public void setCompleted_date(String completed_date) {
		this.completed_date = completed_date;
	}


	@Override
	public String toString() {
		return "CreateNewTask [Id=" + Id + ", task_title=" + task_title + ", assign_to=" + assign_to
				+ ", task_description=" + task_description + ", create_date=" + create_date + ", due_date=" + due_date
				+ ", priority=" + priority + ", status=" + status + ", completed_date=" + completed_date + "]";
	}
}
