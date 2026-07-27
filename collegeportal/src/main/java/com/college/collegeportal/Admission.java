package com.college.collegeportal;

import jakarta.persistence.*;

@Entity
@Table(name = "admission_details")
public class Admission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "student")
    private String student;

    @Column(name = "department")
    private String department;

    @Column(name = "cutoff")
    private String cutoff;

    @Column(name = "marksheet")
    private String marksheet;

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getStudent() { return student; }
    public void setStudent(String student) { this.student = student; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getCutoff() { return cutoff; }
    public void setCutoff(String cutoff) { this.cutoff = cutoff; }

    public String getMarksheet() { return marksheet; }
    public void setMarksheet(String marksheet) { this.marksheet = marksheet; }
}