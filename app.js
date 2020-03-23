const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const colors = require("colors");
colors.enable();


let roles;
let managers;

//Create Connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tucansam1!",
    database: "trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    srcByRole();
    initApplication();
});

const initApplication = () => {
    inquirer.prompt([
        {
            message: "What would you like to do?",
            type: "list",
            choices: ["View All Employees", "View All Employees By Department", "Add Employee", "Update Employee Role"],
            name: "initApplication"
        }
    ]).then(({ initApplication }) => {
        switch (initApplication) {
            case "View All Employees":
                viewAll();
                break;
            case "View All Employees By Department":
                viewAllByDepartment();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateRole();
                break;
        }
    });
};

const srcByRole = () => {
    let query = "SELECT id, title FROM role";
    connection.query(query, function (err, res) {
        roles = res;
    });
};

const viewAll = () => {
    let query = 'SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title, r.salary, CONCAT_WS(" ", m.first_name, m.last_name) AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id INNER JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id ORDER BY e.id ASC';

    connection.query(query, function (err, res) {
        let table = [];
        for (var i = 0; i < res.length; i++) {
            table.push({ id: res[i].id, name: res[i].first_name + " " + res[i].last_name, title: res[i].title, salary: res[i].salary, department: res[i].department, manager: res[i].manager });
        };

        let tableGray = consoleTable.getTable(table);
        console.log(tableGray.gray);

        initApplication();
    });
};

//View All Employees By Department
const viewAllByDepartment = () => {
    inquirer.prompt([
        {
            message: "Which department would you like to view the employees from?",
            choices: ["Care", "Managment", "Product", "People"],
            name: "department",
            type: "list"
        }
    ]).then((answer) => {
        let query = "SELECT e.first_name, e.last_name, r.title, d.name FROM employee e INNER JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id WHERE d.name = ?";
        connection.query(query, [answer.department], function (err, res) {
            let table = [];
            for (var i = 0; i < res.length; i++) {
                table.push({ name: res[i].first_name + " " + res[i].last_name, title: res[i].title, department: res[i].name });
            };

            let tableGray = consoleTable.getTable(table);
            console.log(tableGray.gray);

            initApplication();
        });
    });
};