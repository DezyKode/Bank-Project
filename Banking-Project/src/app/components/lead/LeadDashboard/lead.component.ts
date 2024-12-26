import { Component } from '@angular/core';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrl: './lead.component.css'
})
export class leadComponent {
 
  

  // Data for lead sources
  leadSourceData = [
    { name: 'Walking', value: 0 },
    { name: 'Booking', value: 0 },
    { name: 'Calling', value: 0 },
    { name: 'Reference', value: 0 }
  ];

  // Data for employee statistics
  employeeData = [
    { name: 'John Doe', totalLeads: 0, leadGenerating: 0, leadProcessing: 0 },
    { name: 'Jane Smith', totalLeads: 0, leadGenerating: 0, leadProcessing: 0 }
  ];
  overviewCards = [
    {
      title: 'Users',
      value: 150,
      color: 'text-green-500',
      icon: 'fas fa-user',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Sales',
      value: 300,
      color: 'text-red-500',
      icon: 'fas fa-shopping-cart',
      iconColor: 'text-orange-500'
    },
    {
      title: 'Revenue',
      value: '$1200',
      color: 'text-purple-500',
      icon: 'fas fa-dollar-sign',
      iconColor: 'text-green-500'
    }
  ];
  
}
