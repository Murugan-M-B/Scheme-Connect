package com.rightroute.dto;

public class UserDataDTO {
    private int age;
    private double income;
    private String gender;
    private String category;
    private String occupation;

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public double getIncome() { return income; }
    public void setIncome(double income) { this.income = income; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }
}