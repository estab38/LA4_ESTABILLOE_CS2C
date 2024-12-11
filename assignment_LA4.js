// Initialize the customer queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

function displayQueue() {
    console.log("\nCurrent Customer Queue:");
    if (customerQueue.length === 0) {
        console.log("The queue is empty.");
    } else {
        customerQueue.forEach((customer, index) => {
            console.log(${index + 1}. ${customer});
        });
    }
}


function addCustomer() {
    let newCustomer = prompt("Enter the name of the customer:");
    if (newCustomer !== null && newCustomer.trim() !== "") { //Check for empty or null input
        customerQueue.push(newCustomer);
        alert(Customer ${newCustomer} added to the queue.);
        displayQueue();
    } else {
        alert("Invalid customer name. Please enter a valid name.");
    }

}

function serveCustomer() {
    let serviceNumber = parseInt(prompt("Enter the number of the customer to be served:"));

    if (isNaN(serviceNumber) || serviceNumber < 1 || serviceNumber > customerQueue.length) {
        alert("Invalid service number. Please enter a valid number within the queue range.");
        return;
    }

    let servedCustomer = customerQueue.splice(serviceNumber - 1, 1)[0]; // splice modifies the array
    console.log(Serving customer: ${servedCustomer});
    displayQueue();
}


// Main program loop
while (true) {
    let action = prompt("Choose an action:\n1. Add customer\n2. Serve customer\n3. Exit");

    if (action === '1') {
        addCustomer();
    } else if (action === '2') {
        serveCustomer();
    } else if (action === '3') {
        break;
    } else {
        alert("Invalid action. Please enter 1, 2, or 3.");
    }
}

console.log("Program ended.");
