import { Component } from '@angular/core';
import { TaskReportService } from '../../Service/TaskReport/task-report.service';

@Component({
  selector: 'app-task-report',
  templateUrl: './task-report.component.html',
  styleUrl: './task-report.component.css'
})
export class TaskReportComponent {

  Tasks:any=[];
  constructor(private getTaskService:TaskReportService){}

  ngOnInit(){
    this.getAllTask();
  }

  getAllTask(){
    this.getTaskService.getTask().subscribe((res)=>{
      // console.log(res);
      this.Tasks = res;
    })
  }
}
