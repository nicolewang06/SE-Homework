package com.example.server.repository;

import com.example.server.model.Months;
import org.springframework.data.repository.CrudRepository;

public interface MonthsRepository extends CrudRepository<Months, Long> {
}
