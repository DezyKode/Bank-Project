package com.example.demo.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Entity.BankDetails;
import com.example.demo.Service.BankDetailsServ;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/bankdetails")
@CrossOrigin("*")
public class BankDetailsControll {
	
	@Autowired
	private BankDetailsServ bankDetailsServ;

	@PostMapping("/post")
    public BankDetails bankDetails(
            @RequestPart("bank") String employeeJson,  // Use @RequestPart instead of @RequestParam
            @RequestPart("file") MultipartFile file) throws IOException {

        // Convert the employee JSON string into an AddEmployee object
        ObjectMapper objectMapper = new ObjectMapper();
        BankDetails bank = objectMapper.readValue(employeeJson, BankDetails.class);

        // Process and save the employee with the file
        return bankDetailsServ.bankDetails(bank, file);
    }
	
	@GetMapping("/get")
	public List<BankDetails> getBankDetails(){
		return bankDetailsServ.getBankDetails();
	}
}
