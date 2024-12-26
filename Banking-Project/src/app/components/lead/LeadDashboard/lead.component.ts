import { Component } from '@angular/core';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css'] // Corrected property name
})
export class LeadComponent {
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

  // Data for overview cards
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
    }, { title: 'Follow-ups', value: 25, color: 'text-yellow-600',icon: 'fas fa-check-circle',
      iconColor: 'text-blue-500' },
    { title: 'Closed Leads', value: 40, color: 'text-red-600',icon: 'fas fa-check-circle',
      iconColor: 'text-blue-500' },
    { title: 'Pending Leads', value: 15, color: 'text-gray-600' },
  ];

  // Data for secondary overview cards (if needed)
  secondOverviewCards = [
    {
      title: 'Leads Processed',
      value: 50,
      color: 'text-blue-500',
      icon: 'fas fa-check-circle',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Revenue',
      value: '$800',
      color: 'text-purple-500',
      icon: 'fas fa-dollar-sign',
      iconColor: 'text-green-500'
    }
  ];
}
