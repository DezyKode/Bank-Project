import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
  // standalone:true,
  // imports:[FormsModule,BrowserModule]
})
export class InvoiceComponent {
  invoiceNo:string = '';
  invoiceForm:FormGroup;
  today!: string;
formcontrols: any;

constructor(private fb:FormBuilder){
  this.invoiceForm=this.fb.group({
    invoiceNo:['',[Validators.required,Validators.pattern('^[A-Za-z0-9]+$')]],
    referencePoNo: ['', Validators.required], // Required field for Reference PO Number
    date: ['', Validators.required], // Required field for Date
    bank: ['', Validators.required], // Required field for Bank
    branch: ['', Validators.required], // Required field for Branch
    billingAddress: ['', Validators.required], // Required field for Billing Address
    billingState: ['', Validators.required], // Required field for Billing State
    billingPincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]], // Pincode validation
    tax: ['', Validators.required], // Required field for Tax
    subTotal: ['', Validators.required], // Required field for Sub Total
    totalTax: ['', Validators.required], // Required field for Total Tax
    totalAmount: ['', Validators.required], // Required field for Total Amount
  })

}

ngOnInit() {
  // Set today to the current date in YYYY-MM-DD format
  const currentDate = new Date();
  this.today = currentDate.toISOString().split('T')[0];
}

validateInvoiceNo(event: any): void {
  const inputValue = event.target.value;
  // Allow only numbers (remove non-numeric characters)
  if (!/^\d*$/.test(inputValue)) {
    event.target.value = inputValue.replace(/[^0-9]/g, ''); // Removes non-numeric characters
  }
}
resetForm(){
  this.invoiceForm.reset();
    // If you want to reset the form with specific values, you can pass an object here
    // Example: this.invoiceForm.reset({ invoiceNo: '123', poNo: 'PO123', ... });
}

onSave(){
  if(this.invoiceForm.valid){
    console.log('form submitted ',this.invoiceForm.value);
    alert('form submitted successfully');
  }
  else
  {
    console.log('form is invalid')
    this.invoiceForm.markAllAsTouched();
  }

}

get formControls() {
  return this.invoiceForm.controls;
}
}
