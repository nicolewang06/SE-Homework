package com.example.server.service;

import com.example.server.model.Months;

public interface MonthsService {
    Iterable<Months> getMonths();
    Months createMonth(Months month);
}
