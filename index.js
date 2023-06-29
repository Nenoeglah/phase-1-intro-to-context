// Your code here

// function createEmployeeRecord(arr){
// return {
//     firstName :arr[0],
//     familyName :arr[1],
//     title :arr[2],
//     payPerHour :arr[3],
// timeInEvents :[],
// timeOutEvents :[],
// }

// }
// Create an Employee Record
function createEmployeeRecord(data) {
    return {
      firstName: data[0],
      familyName: data[1],
      title: data[2],
      payPerHour: data[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Create multiple Employee Records
  function createEmployeeRecords(data) {
    return data.map(createEmployeeRecord);
  }
  
  // Add a timeIn event to an employee's record
  function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
    return employee;
  }
  
  // Add a timeOut event to an employee's record
  function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    });
    return employee;
  }
  
  // Calculate the hours worked on a specific date
  function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date);
    let timeOut = employee.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  // Calculate the wages earned on a specific date
  function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  // Calculate the total wages for an employee
  function allWagesFor(employee) {
    let dates = employee.timeInEvents.map(event => event.date);
    let wages = dates.map(date => wagesEarnedOnDate(employee, date));
    return wages.reduce((total, wage) => total + wage, 0);
  }
  
  // Calculate the total payroll for all employees
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }