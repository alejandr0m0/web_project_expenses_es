let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
    ["groceries", 33], 
    ["restaurants", 50], 
    ["transport", 12], 
    ["home", 70], 
    ["subscriptions", 17], 
    ["groceries", 28], 
    ["subscriptions", 12],
];

for (const expense of expenseEntries) {
    totalExpensesValue += expense[1];
}

function calculateAverageExpense() {
    if (expenseEntries.length === 0) {
        return 0;
    } else {
        return totalExpensesValue/expenseEntries.length;
    }
}

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
    let balance = calculateBalance();
    if (balance < 0) {
        balanceColor = "red";
    } else if (balance < (budgetValue * .75)) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

function calculateCategoryExpenses(category) {
    let expenseByCategory = 0;
    for (const expense of expenseEntries) {
        if (expense[0] === category) {
            expenseByCategory += expense[1];
        }
    }
    
    return expenseByCategory;
}

function calculateLargestCategory() {
    let categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
    let categoriesData = [];

    for (const category of categories) {
        categoriesData.push([category, calculateCategoryExpenses(category)]);
    }

    let maximum = categoriesData[0][1];
    let categoryName = categoriesData[0][0];

    for (const category of categoriesData) {
        if ( category[1] > maximum ) {
            maximum = category[1];
            categoryName = category[0];
        }
    }

    return categoryName;
}

function addExpenseEntry(expenseEntry) {
    totalExpensesValue += expenseEntry[1];
    expenseEntries.push(expenseEntry);
}