# Twelve_Employee_Management

![photo of database servers](https://user-images.githubusercontent.com/55456375/76482963-62839680-63db-11ea-8dc0-35b92c5c0b18.png)

Application to help track employees. 

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. 

This application is a solution for managing a company's employees using node, inquirer, and MySQL.

# department:
id - INT PRIMARY KEY
name - VARCHAR(30) to hold department name

# role:

id - INT PRIMARY KEY
title -  VARCHAR(30) to hold role title
salary -  DECIMAL to hold role salary
department_id -  INT to hold reference to department role belongs to

# employee:

id - INT PRIMARY KEY
first_name - VARCHAR(30) to hold employee first name
last_name - VARCHAR(30) to hold employee last name
role_id - INT to hold reference to role employee has
manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

# Build a command-line application that at a minimum allows the user to:

Add departments, roles, employees
View departments, roles, employees
Update employee roles