package com.college.collegeportal;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "alumni_details")
public class Alumni {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private LocalDate dob;
    private String department;
    private String gender;
    private String attending;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public LocalDate getDob() { return dob; }
    public void setDob(LocalDate dob) { this.dob = dob; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getAttending() { return attending; }
    public void setAttending(String attending) { this.attending = attending; }
}