package com.example.demo.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Entity.AddEmployee;
import com.example.demo.Repository.AddEmployeeRepo;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class AddEmployeeServ {

    @Autowired
    private AddEmployeeRepo addEmployeeRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Folder to save uploaded photos
    private static final String UPLOAD_DIR = "uploads/";

    // Ensure the upload directory exists
    static {
        File directory = new File(UPLOAD_DIR);
        if (!directory.exists()) {
            directory.mkdir();
        }
    }

    public AddEmployee addEmployee(AddEmployee employee, MultipartFile file) throws IOException {
        // Encode the password
        employee.setPassword(passwordEncoder.encode(employee.getPassword()));
        
        // Handle photo upload
        if (file != null && !file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            String filePath = UPLOAD_DIR + fileName;

            // Save the photo to the server
            Path path = Paths.get(filePath);
            Files.write(path, file.getBytes());

            // Save the file path to the employee entity
            employee.setPhotoUpload(filePath);
        }

        // Save the employee details in the database
        return addEmployeeRepo.save(employee);
    }
    
    public List<AddEmployee> getEmployee() {
        List<AddEmployee> employees = addEmployeeRepo.findAll();
        for (AddEmployee employee : employees) {
            String filePath = employee.getPhotoUpload();
            if (filePath != null && !filePath.isEmpty()) {
                try {
                    Path path = Paths.get(filePath);
                    byte[] imageBytes = Files.readAllBytes(path);
                    String base64Image = Base64.getEncoder().encodeToString(imageBytes);
                    employee.setPhotoUpload(base64Image);
                } catch (IOException e) {
                    // Log the error and set imageData to null
                    employee.setPhotoUpload(null);
                }
            }
        }
        return employees;
    }
    
    public Optional<AddEmployee> getEmployeeById(int id) {
        // Fetch the employee by ID
        Optional<AddEmployee> employeeOptional = addEmployeeRepo.findById(id);

        // If employee is present, handle photo conversion
        employeeOptional.ifPresent(employee -> {
            String filePath = employee.getPhotoUpload();
            if (filePath != null && !filePath.isEmpty()) {
                try {
                    // Convert the file to Base64 if it exists
                    Path path = Paths.get(filePath);
                    byte[] imageBytes = Files.readAllBytes(path);
                    String base64Image = Base64.getEncoder().encodeToString(imageBytes);
                    employee.setPhotoUpload(base64Image);  // Set the Base64 string as the photo
                } catch (IOException e) {
                    // Log the error and set imageData to null in case of an error
                    employee.setPhotoUpload(null);
                }
            }
        });

        // Return the employee wrapped in an Optional
        return employeeOptional;
    }
    
    public AddEmployee updatePassword(int id, AddEmployee empDetails) {
    	AddEmployee emp = addEmployeeRepo.findById(id).orElse(null);
    	
    	empDetails.setPassword(passwordEncoder.encode(empDetails.getPassword()));
    	if(emp != null) {
    		emp.setPassword(empDetails.getPassword());
    		emp.setConfirm_password(empDetails.getConfirm_password());
    	}
    	return addEmployeeRepo.save(emp);
    }
    
    public AddEmployee updateStatus(int id, AddEmployee empDetails) {
    	AddEmployee emp = addEmployeeRepo.findById(id).orElse(null);
    	
    	empDetails.setPassword(passwordEncoder.encode(empDetails.getPassword()));
    	if(emp != null) {
    		emp.setStatus(empDetails.getStatus()); 
    	}
    	return addEmployeeRepo.save(emp);
    }
}
