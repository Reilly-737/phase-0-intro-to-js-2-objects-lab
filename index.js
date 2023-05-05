// Write your solution in this file!
// Initialize an employee object with name and streetAddress keys
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Function to update an employee object with a new key-value pair without modifying the original object
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, // Spread operator to copy the original object's key-value pairs
        [key]: value // Square brackets to use a variable as a key
    };
}

// Function to update an employee object with a new key-value pair, modifying the original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from an employee object without modifying the original object
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Create a new object to copy the original object's key-value pairs
    delete newEmployee[key]; // Delete the specified key-value pair from the new object
    return newEmployee;
}

// Function to delete a key-value pair from an employee object, modifying the original object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Delete the specified key-value pair from the original object
    return employee;
}
