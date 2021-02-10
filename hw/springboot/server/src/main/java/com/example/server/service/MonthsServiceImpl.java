package com.example.server.service;

import com.example.server.model.Months;
import com.example.server.repository.MonthsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MonthsServiceImpl implements MonthsService{
    @Autowired
    MonthsRepository monthsRepository;

    @Override
    public Iterable<Months> getMonths() {
        return monthsRepository.findAll();
    }

    @Override
    public Months createMonth(Months month) {
        return monthsRepository.save(month);
    }
}
