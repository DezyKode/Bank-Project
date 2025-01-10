import { Component } from '@angular/core';
import { TaskReportService } from '../../Service/TaskReport/task-report.service';

@Component({
  selector: 'app-task-report',
  templateUrl: './task-report.component.html',
  styleUrls: ['./task-report.component.css']
})
export class TaskReportComponent {

  Tasks: any[] = [];
  selectedTask: any;
  // selectedPriority: any;

  // Separate arrays for tasks grouped by their status
  toDoTasks: any[] = [];
  inProgressTasks: any[] = [];
  completedTasks: any[] = [];

  priority: string = '';
  status: string = '';  // Default value
  statusClass: string = '';  // Default background class for 'Completed'

  priorityClass: string = '';

  constructor(private getTaskService: TaskReportService) { }

  ngOnInit() {
    this.getAllTask();
  }

  getAllTask() {
    this.getTaskService.getTask().subscribe((res) => {
      this.Tasks = res;
      this.filterTasksByStatus();
    });
  }

  // Method to group tasks by their status
  filterTasksByStatus() {
    this.toDoTasks = this.Tasks.filter(task => task.status === 'ToDo');
    this.inProgressTasks = this.Tasks.filter(task => task.status === 'InProgress');
    this.completedTasks = this.Tasks.filter(task => task.status === 'Completed');
  }

  // Method to set the selected task
  selectTask(task: any) {
    this.selectedTask = task;
    this.status = task.status;
    this.priority = task.priority; // Set status to the task's status
    this.onStatusChange(); // Update the background color based on the status
    this.onPriorityChange()
  }


  // This method is called when the status changes
  onStatusChange() {
    switch (this.status) {
      case 'Completed':
        this.statusClass = 'bg-success';
        break;
      case 'InProgress':
        this.statusClass = 'bg-warning'; // You can use 'bg-warning' or any other class for orange
        break;
      case 'ToDo':
        this.statusClass = 'bg-warning'; // You can adjust the color as needed (yellow in your description)
        break;
      default:
        this.statusClass = '';
    }
    if (this.selectedTask) {
      this.selectedTask.status = this.status;
      this.selectedTask.priority = this.priority;
      this.updateTaskStatusInDatabase(this.selectedTask.id, this.status, this.priority); // Call the backend to update the task status in the database
      this.filterTasksByStatus(); // Re-group tasks after status change
    }
  }

  // This method is called when the status changes
  onPriorityChange() {
    switch (this.priority) {
      case 'Low':
        this.priorityClass = 'bg-orange';
        break;
      case 'High':
        this.priorityClass = 'bg-danger';
        break;
      case 'Medium':
        this.priorityClass = 'bg-primary';
        break;
      default:
        this.priorityClass = '';
    }
    if (this.selectedTask) {
      this.selectedTask.priority = this.priority;
      this.updateTaskStatusInDatabase(this.selectedTask.id, this.status, this.priority); // Call the backend to update the task status in the database
      // this.filterTasksByStatus(); // Re-group tasks after status change
    }
  }

  // New method to update the task status in the database
  updateTaskStatusInDatabase(taskId: number, status: string, priority: string) {
    this.getTaskService.updateStatus(taskId, status, priority).subscribe(
      (response) => {
        console.log('Task status updated successfully:', response);
        // Optionally, handle a successful update (e.g., show a success message)
      },
      (error) => {
        console.error('Error updating task status:', error);
        // Optionally, handle the error (e.g., show an error message)
      }
    );
  }
}