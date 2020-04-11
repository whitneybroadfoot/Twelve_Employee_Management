INSERT INTO  employee
    (first_name, last_name, role_id)
VALUES
    ("Billy", "Wilson", 1),
    ("Katie", "Ryan", 1),
    ("Jesse", "Smith", 3),
    ("Veronica", "Marcelo", 2),
    ("Alice", "Newman", 4),
    ("Mary", "Opperman", 4),
    ("Whitney", "Broadfoot", 3);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Secretary", 20000.00, 1),
    ("Phone Representative", 30000.00, 1),
    ("Book Keeper", 40000.00, 2),
    ("Purchasing Director", 50000.00, 3),
    ("Employee Engagement", 60000.00, 3),
    ("Frontend Engineer", 70000.00, 4);

INSERT INTO department
    (name)
VALUES
    ("Customer Service"),
    ("Accounting"),
    ("Management"),
    ("Developer");

SELECT *
FROM role;
SELECT title
FROM role;
SELECT *
FROM department;
SELECT *
FROM employee;