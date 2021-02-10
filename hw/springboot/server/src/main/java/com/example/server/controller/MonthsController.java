package com.example.server.controller;

import com.example.server.model.Months;
import com.example.server.service.MonthsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/months")
public class MonthsController {
    @Autowired
    MonthsService monthsService;

    @GetMapping
    public Iterable<Months> getMonths() {
        return monthsService.getMonths();
    }

    @PostMapping
    public Months createMonth(@RequestBody Months month) {
        return monthsService.createMonth(month);
    }
}
