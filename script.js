// Example data for basic salaries by grade
const salaryData = {
    "I": 90000, // Grade I
    "II": 75000, // Grade II
    "III": 60000 // Grade III
};

// Overtime rate per hour
const overtimeRate = 300; // Rs per OT hour

// Function to calculate salary
function calculateSalary() {
    // Get values from the form
    const grade = document.getElementById('grade').value;
    const otHours = parseFloat(document.getElementById('ot-hours').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const daysOff = parseInt(document.getElementById('days-off').value) || 0;

    // Basic salary based on grade
    const basicSalary = salaryData[grade];

    // Calculate OT payment
    const otPayment = otHours * overtimeRate;

    // Calculate total salary before deductions
    let totalSalary = basicSalary + otPayment;

    // Adjust for days off (assuming 1 day off reduces salary by the average daily pay)
    const dailyPay = basicSalary / 30; // Assuming 30 days per month
    const salaryDeductionForDaysOff = daysOff * dailyPay;

    // Subtract deductions and salary reductions
    totalSalary -= (deductions + salaryDeductionForDaysOff);

    // Display the result
    document.getElementById('result').innerHTML = `<h2>Total Estimated Salary: Rs ${totalSalary.toFixed(2)}</h2>`;
}
