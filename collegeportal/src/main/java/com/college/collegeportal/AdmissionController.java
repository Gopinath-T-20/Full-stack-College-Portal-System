package com.college.collegeportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;

@RestController
@RequestMapping("/api/admission")
@CrossOrigin(origins = "*")
public class AdmissionController {

    @Autowired
    private AdmissionRepository admissionRepository;

    private final String UPLOAD_DIR = "uploads/";

    @PostMapping("/apply")
    public String applyAdmission(
            @RequestParam("student_name") String studentName,
            @RequestParam("department") String department,
            @RequestParam("cutoff") String cutoff,
            @RequestParam("marksheet") MultipartFile marksheet) {

        try {
            // uploads folder illana create pannuvom
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // TO SAVE FILE
            String filename = marksheet.getOriginalFilename();
            Path filePath = uploadPath.resolve(filename);
            Files.copy(marksheet.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // SAVE FILE IN DB
            Admission admission = new Admission();
            admission.setStudent(studentName);
            admission.setDepartment(department);
            admission.setCutoff(cutoff);
            admission.setMarksheet(filename);

            admissionRepository.save(admission);

            return "success";

        } catch (IOException e) {
            return "error: " + e.getMessage();
        }
    }

    @DeleteMapping("/{id}")
    public String deleteAdmission(@PathVariable int id) {
        admissionRepository.deleteById(id);
        return "deleted";
    }
}
