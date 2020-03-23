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
