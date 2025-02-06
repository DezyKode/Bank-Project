package com.example.demo.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Entity.AddEmployee;
import com.example.demo.Entity.BankDetails;
import com.example.demo.Repository.BankDetailsRepo;

@Service
public class BankDetailsServ {
	
	@Autowired
	private BankDetailsRepo bankDetailsRepo;
	
	// Folder to save uploaded photos
    private static final String UPLOAD_DIR = "bankIcon/";

    // Ensure the upload directory exists
    static {
        File directory = new File(UPLOAD_DIR);
        if (!directory.exists()) {
            directory.mkdir();
        }
    }

    public BankDetails bankDetails(BankDetails bank, MultipartFile file) throws IOException {

        if (file != null && !file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            String filePath = UPLOAD_DIR + fileName;

            Path path = Paths.get(filePath);
            Files.write(path, file.getBytes());

            bank.setPhotoUpload(filePath);
        }

        return bankDetailsRepo.save(bank);
    }
    
    public List<BankDetails> getBankDetails() {
        List<BankDetails> bank = bankDetailsRepo.findAll();
        for (BankDetails bankPayout : bank) {
            String filePath = bankPayout.getPhotoUpload();
            if (filePath != null && !filePath.isEmpty()) {
                try {
                    Path path = Paths.get(filePath);
                    byte[] imageBytes = Files.readAllBytes(path);
                    String base64Image = Base64.getEncoder().encodeToString(imageBytes);
                    bankPayout.setPhotoUpload(base64Image);
                } catch (IOException e) {
                    // Log the error and set imageData to null
                	bankPayout.setPhotoUpload(null);
                }
            }
        }
        return bank;
    }

}
