package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
	
	@Column(name = "Due_Date")
	private String due_date;
	
	@Column(name = "Priority")
	private String priority;
	
	@Column(name = "Drop_File")
	private String drop_file;

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

	public String getDrop_file() {
		return drop_file;
	}

	public void setDrop_file(String drop_file) {
		this.drop_file = drop_file;
	}

	@Override
	public String toString() {
		return "CreateNewTask [Id=" + Id + ", task_title=" + task_title + ", assign_to=" + assign_to
				+ ", task_description=" + task_description + ", due_date=" + due_date + ", priority=" + priority
				+ ", drop_file=" + drop_file + "]";
	}
	
	
	
}
