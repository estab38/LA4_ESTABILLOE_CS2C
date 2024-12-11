//Simple Hash Function (replace with a more robust one for production)
function hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 10; // Adjust the modulo for table size
}


// Initialize the hash table (using an array for simplicity)
const hashTableSize = 10; // Adjust as needed
let hashTable = new Array(hashTableSize).fill(null);


function addCustomer() {
    let newCustomer = prompt("Enter the customer's name:");
    if (newCustomer !== null && newCustomer.trim() !== "") {
        let index = hash(newCustomer);
        if (hashTable[index] === null) {
            hashTable[index] = newCustomer;
            alert(Customer ${newCustomer} added to the hash table.);
        } else {
            //Handle collisions (simple chaining for this example)
            if (Array.isArray(hashTable[index])) {
                hashTable[index].push(newCustomer)
            } else {
                hashTable[index] = [hashTable[index], newCustomer];
            }
            alert(Customer ${newCustomer} added to the hash table (collision handled).);
        }
        displayHashTable();
    } else {
        alert("Invalid customer name. Please enter a valid name.");
    }
}


function serveCustomer() {
    let serviceNumberStr = prompt("Enter the number of the customer to be served:");
    let serviceNumber = parseInt(serviceNumberStr);

    if (isNaN(serviceNumber) || serviceNumber < 1) {
        alert("Invalid service number. Please enter a valid positive integer.");
        return;
    }

    let servedCustomer = null;
    let indexFound = -1;
    let customerIndex = 0;


    for (let i = 0; i < hashTable.length; i++) {
        if (hashTable[i] !== null) {
            if (Array.isArray(hashTable[i])){
                if (customerIndex + 1 === serviceNumber){
                    servedCustomer = hashTable[i].shift();
                    indexFound = i;
                    break;
                }
                customerIndex += hashTable[i].length

            } else {
                if (customerIndex + 1 === serviceNumber){
                     servedCustomer = hashTable[i];
                     hashTable[i] = null;
                     indexFound = i;
                     break;
                }
                customerIndex++;

            }
        }
    }


    if (servedCustomer) {
        console.log(Serving customer: ${servedCustomer});
        displayHashTable();
    } else {
        alert(No customer found with that number.);
    }
}



function displayHashTable() {
    console.log("\nCurrent Hash Table:");
    for (let i = 0; i < hashTable.length; i++) {
        if (hashTable[i] !== null) {
            console.log(${i}: ${Array.isArray(hashTable[i]) ? hashTable[i].join(', ') : hashTable[i]});
        } else {
            console.log(${i}: Empty);
        }
    }
}


// Add initial customers (for testing)
["Elaine", "Althea", "Angelo", "Lito", "Engelbert"].forEach(customer => addCustomer());


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
        alert("Invalid action. Please select 1, 2, or 3.");
    }
}

console.log("Program ended.");
