// Get the element with ID "save-el" and store it in the variable saveEl
let saveEl = document.getElementById("save-el")

// Get the element with ID "count-el" and store it in the variable countEl
let countEl = document.getElementById("count-el")

// Initialize the count variable to 0
let count = 0

// Define a function named increment
function increment() {
    // Increment the count by 1
    count += 1

    // Update the text content of the countEl element with the value of count
    countEl.textContent = count
}

// Define a function named save
function save() {
    // Convert the count to a string and append " - " to it
    let countStr = count + " - "

    // Append the countStr to the text content of the saveEl element
    saveEl.textContent += countStr

    // Set the text content of the countEl element to 0
    countEl.textContent = 0

    // Reset the count variable to 0
    count = 0
}
