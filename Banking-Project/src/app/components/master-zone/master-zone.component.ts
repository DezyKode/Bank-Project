import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-zone',
  templateUrl: './master-zone.component.html',
  styleUrls: ['./master-zone.component.css']
})
export class MasterZoneComponent implements OnInit {
  states: { name: string, cities: string[] }[] = [];
  cities: string[] = [];
  selectedState: string = '';
  selectedCity: string = '';
  zone: string = '';
  zonesList: { zone: string, state: string, city: string, totalLocations: number }[] = [];

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
    const selectedStateObj = this.states.find(state => state.name === this.selectedState);
    this.cities = selectedStateObj ? selectedStateObj.cities : [];
    this.selectedCity = ''; // Reset city selection
  }

  // Handle form submission
  createZone(): void {
    if (!this.zone || !this.selectedState || !this.selectedCity) {
      alert('Please fill all fields!');
      return;
    }

    // For now, assuming each zone has a total of 100 locations
    const totalLocations = 100;

    // Add the created zone to the list
    this.zonesList.push({
      zone: this.zone,
      state: this.selectedState,
      city: this.selectedCity,
      totalLocations: totalLocations
    });

    console.log('Zone Created:', {
      zone: this.zone,
      state: this.selectedState,
      city: this.selectedCity,
      totalLocations: totalLocations
    });
    alert(`Zone "${this.zone}" created successfully for ${this.selectedCity}, ${this.selectedState}!`);

    this.resetForm();
  }

  // Reset the form fields
  resetForm(): void {
    this.zone = '';
    this.selectedState = '';
    this.selectedCity = '';
    this.cities = [];
  }

  // Delete a zone
  deleteZone(index: number): void {
    if (confirm('Are you sure you want to delete this zone?')){
      this.zonesList.splice(index, 1);
    }
  }
}
