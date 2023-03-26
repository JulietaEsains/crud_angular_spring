package com.employee.management.backend.controllers;

import com.employee.management.backend.entities.Employee;
import com.employee.management.backend.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    private EmployeeRepository repository;

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> findAllEmployees() {
        try {
            var employees = repository.findAll();
            if (employees.isEmpty()) return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(employees, HttpStatus.OK);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee) {
        try {
            return new ResponseEntity<>(repository.save(employee), HttpStatus.CREATED);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    
}
