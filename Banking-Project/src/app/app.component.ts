import { Component } from '@angular/core';

interface DropdownItem {
  label: string;
  children?: DropdownItem[];
  showChildren?: boolean;  // Add showChildren flag
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Banking-Project';

  dropdownData: DropdownItem[] = [
      
    {
      label: 'Product',
      showChildren: false,  // Add showChildren flag
      children: [
        {
          label: 'Mobile',
          showChildren: false,  // Add showChildren flag
          children: [
            { label: 'Apple' },
            { label: 'Sansung' },
            { label: 'Vivo' }
          ]
        },
        { label: 'Electronics',
          showChildren: false,  // Add showChildren flag
          children: [
            { label: 'TV' },
            { label: 'Refrigerator' }
          ]
         }
      ]
    },
  ];

  toggleChildren(item: DropdownItem): void {
    if (item.children) {
      item.showChildren = !item.showChildren;
    }
  }
  
}
