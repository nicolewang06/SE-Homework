package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "months")
public class Months {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String monthName;

    @Column
    private Integer monthDays;

    @Column
    private String holiday;

    public Months() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMonthName() {
        return monthName;
    }

    public void setMonthName(String monthName) {
        this.monthName = monthName;
    }

    public Integer getMonthDays() {
        return monthDays;
    }

    public void setMonthDays(Integer monthDays) {
        this.monthDays = monthDays;
    }

    public String getHoliday() {
        return holiday;
    }

    public void setHoliday() {
        this.holiday = holiday;
    }
}
