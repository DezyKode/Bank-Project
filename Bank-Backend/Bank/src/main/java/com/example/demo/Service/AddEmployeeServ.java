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
import java.util.List;

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
        employee.setPassward(passwordEncoder.encode(employee.getPassward()));

        // Handle photo upload
        if (file != null && !file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            String filePath = UPLOAD_DIR + fileName;

            // Save the photo to the server
            Path path = Paths.get(filePath);
            Files.write(path, file.getBytes());

            // Save the file path to the employee entity
            employee.setUpload_Photo(filePath);
        }

        // Save the employee details in the database
        return addEmployeeRepo.save(employee);
    }

//	public List<AddEmployee> getEmp() {
//		// TODO Auto-generated method stub
//		return addEmployeeRepo.findAll();
//	}
}
