import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-master-zone',
  templateUrl: './master-zone.component.html',
  styleUrls: ['./master-zone.component.css']
})
export class MasterZoneComponent implements OnInit {

  states: { name: string, cities: string[] }[] = [];
  constructor(private cdRef: ChangeDetectorRef) {}
  cities: string[] = [];
  selectedState: string = '';
  selectedCity: string = '';
  zone: string = '';
  zonesList: { zone: string, state: string, city: string, totalLocations: number }[] = [];


  isMiddleContainerVisible: boolean = false;

  
  editingZoneIndex: number | null = null; 



  // for search

  filteredZones: { zone: string, state: string, city: string, totalLocations: number }[] = [];
  searchTerm: string = ''; // Holds the search term



   filterState: string = '';  // State filter
  filterCity: string = '';   // City filter


  ngOnInit(): void {
    // Initialize states and cities
    this.states = [
      { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Thane', 'Kolhapur', 'Satara', 'Ratnagiri', 'Chandrapur', 'Jalna', 'Sangli', 'Akola', 'Amravati', 'Parbhani'] },
          { name: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Hubli', 'Mangalore', 'Belagavi', 'Gulbarga', 'Davangere', 'Tumakuru', 'Shivamogga', 'Chitradurga', 'Bijapur', 'Bagalkot', 'Karwar', 'Hassan', 'Mandya', 'Raichur'] },
          { name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Erode', 'Vellore', 'Dindigul', 'Thanjavur', 'Theni', 'Ramanathapuram', 'Tiruppur', 'Nagapattinam', 'Pudukkottai', 'Virudhunagar'] },
          { name: 'Rajasthan', cities: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Sikar', 'Jaisalmer', 'Bhilwara', 'Chittorgarh', 'Nagaur', 'Pali', 'Barmer', 'Tonk', 'Jhunjhunu'] },
          { name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Junagadh', 'Anand', 'Nadiad', 'Gandhinagar', 'Mehsana', 'Vapi', 'Navsari', 'Bhuj', 'Morbi', 'Himmatnagar'] },
          { name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Prayagraj', 'Bareilly', 'Aligarh', 'Mathura', 'Gorakhpur', 'Noida', 'Ghaziabad', 'Muzaffarnagar', 'Moradabad', 'Saharanpur', 'Jaunpur'] },
          { name: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Siliguri', 'Durgapur', 'Asansol', 'Malda', 'Jalpaiguri', 'Kharagpur', 'Burdwan', 'Purulia', 'Bongaon', 'Cooch Behar', 'Raniganj', 'Haldia', 'Dinhata'] },
          { name: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Tirupati', 'Guntur', 'Nellore', 'Rajahmundry', 'Kakinada', 'Anantapur', 'Chittoor', 'Kurnool', 'Srikakulam', 'Vizianagaram', 'Kadapa', 'Eluru'] },
          { name: 'Bihar', cities: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Munger', 'Purnia', 'Arrah', 'Buxar', 'Sasaram', 'Samastipur', 'Motihari', 'Katihar', 'Sitamarhi', 'Chhapra', 'Darbhanga'] },
          { name: 'Punjab', cities: ['Chandigarh', 'Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Moga', 'Kapurthala', 'Rupnagar', 'Firozpur', 'Faridkot', 'Abohar', 'Zirakpur'] },
          { name: 'Haryana', cities: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Hisar', 'Karnal', 'Yamunanagar', 'Sirsa', 'Rohtak', 'Bhiwani', 'Sonipat', 'Nuh', 'Fatehabad', 'Jind', 'Kaithal'] },
          { name: 'Kerala', cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Kottayam', 'Thrissur', 'Palakkad', 'Malappuram', 'Ernakulam', 'Kannur', 'Alappuzha', 'Pathanamthitta', 'Idukki', 'Kollam', 'Wayanad'] },
          { name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Rewa', 'Khandwa', 'Chhindwara', 'Betul', 'Shivpuri', 'Sehore', 'Mandsaur', 'Dewas', 'Shahdol'] },
          { name: 'Delhi', cities: ['New Delhi', 'Dwarka', 'Rohini', 'Vasant Kunj', 'Janakpuri', 'Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'Hauz Khas', 'Saket', 'Chandni Chowk', 'Kalkaji', 'Preet Vihar', 'Pitampura'] },
          { name: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Sambalpur', 'Berhampur', 'Rourkela', 'Koraput', 'Balasore', 'Jharsuguda', 'Jeypore', 'Rayagada', 'Dhenkanal', 'Keonjhar', 'Angul', 'Kendrapara'] },
          { name: 'Chhattisgarh', cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Jagdalpur', 'Raigarh', 'Dhamtari', 'Korba', 'Rajnandgaon', 'Janjgir', 'Mahasamund', 'Surguja'] },
          { name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Giridih', 'Hazaribagh', 'Deoghar', 'Ramgarh', 'Dumka', 'Chakradharpur', 'Koderma', 'Chaibasa'] },
          { name: 'Assam', cities: ['Guwahati', 'Jorhat', 'Dibrugarh', 'Silchar', 'Tezpur', 'Nagaon', 'Bongaigaon', 'Tinsukia', 'Jorhat', 'Haflong', 'Dhemaji', 'Sibsagar'] },
          { name: 'Himachal Pradesh', cities: ['Shimla', 'Manali', 'Dharamshala', 'Kullu', 'Kangra', 'Solan', 'Kullu', 'Nahan', 'Chamba', 'Mandi', 'Hamirpur', 'Bilaspur', 'Una'] },
          { name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Nainital', 'Rishikesh', 'Roorkee', 'Haldwani', 'Kashipur', 'Pauri', 'Almora', 'Ramnagar', 'Kotdwar'] },
          { name: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Cortalim', 'Quepem', 'Bicholim', 'Canacona', 'Cortalim'] },
          { name: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Jorethang', 'Mangan', 'Ravangla'] },
          { name: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha', 'Zunheboto', 'Peren', 'Mon', 'Tuensang'] }
    
    ];
  }

  // Handle state selection
  onStateChange(): void {
    const state = this.states.find(s => s.name === this.selectedState);
    this.cities = state ? state.cities : [];
  }

  // Toggle visibility of middle-container (Create Zone form)
  toggleMiddleContainer(): void {
    this.isMiddleContainerVisible = !this.isMiddleContainerVisible;
  }



 handleSearch(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchTerm = searchValue;

    this.filteredZones = this.zonesList.filter(zone =>
      zone.zone.toLowerCase().includes(this.searchTerm) ||
      zone.state.toLowerCase().includes(this.searchTerm) ||
      zone.city.toLowerCase().includes(this.searchTerm)
    );
  }


  // Handle form submission (Create Zone)
  createZone(): void {
    if (!this.zone || !this.selectedState || !this.selectedCity) {
      alert('Please fill all fields!');
      return;
    }

    if (this.editingZoneIndex !== null) {
      this.zonesList[this.editingZoneIndex] = {
        zone: this.zone,
        state: this.selectedState,
        city: this.selectedCity,
        totalLocations: Math.floor(Math.random() * 100) + 1,
      };
      this.editingZoneIndex = null;
    } else {
      this.zonesList.push({
        zone: this.zone,
        state: this.selectedState,
        city: this.selectedCity,
        totalLocations: Math.floor(Math.random() * 100) + 1,
      });
    }

    this.resetForm();
    this.isMiddleContainerVisible = false;

    this.cdRef.detectChanges();
  this.filteredZones = [...this.zonesList];
  }

  // Reset the form fields
  resetForm(): void {
    this.zone = '';
    this.selectedState = '';
    this.selectedCity = '';
    this.cities = [];
  }

  // Cancel the creation of a new zone and hide the middle-container
  cancelCreateZone(): void {
    this.resetForm();
    this.isMiddleContainerVisible = false;
  }

  // Delete a zone
  deleteZone(index: number): void {
    if (confirm('Are you sure you want to delete this zone?')) {
      this.zonesList.splice(index, 1);
      this.filteredZones = [...this.zonesList]; 
    }
  }

  handleEdit(index: number): void {
     const zone = this.zonesList[index];
    this.zone = zone.zone;
    this.selectedState = zone.state;
    this.selectedCity = zone.city;
    this.editingZoneIndex = index;
    this.onStateChange();
    this.isMiddleContainerVisible = true;
  }



  ZoneValidation(event: any): void {
    let inputValue = event.target.value;

    // Remove any non-letter characters (including numbers and special characters)
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
}


}
