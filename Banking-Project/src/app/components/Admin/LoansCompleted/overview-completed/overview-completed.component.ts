import { Component } from '@angular/core';

@Component({
  selector: 'app-overview-completed',
  templateUrl: './overview-completed.component.html',
  styleUrl: './overview-completed.component.css'
})
export class OverviewCompletedComponent {
  applicantDetails = [
    { title: "Application No", value: "#LD200", icon: "fas fa-file-alt" },
    { title: "Applicant", value: "Navnat Suryakant Gaikwad", icon: "fas fa-user" },
    { title: "Account Manager", value: "Not Assigned", icon: "fas fa-user-tie" },
    { title: "Case Generated", value: "Not Available", icon: "fas fa-folder-open" },
    { title: "Requirement Loan", value: "Rs. 60,000", icon: "fas fa-money-bill-wave" },
    { title: "Loan Status", value: "To be logged in", icon: "fas fa-hourglass-half" },
    { title: "Last Update", value: "Not Available", icon: "fas fa-clock" }
  ];
}
