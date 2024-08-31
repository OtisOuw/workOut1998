
let legsCount = 0;
let updatedPushCount = 0;

const url = 'http://ppllog.xyz/save-count'







function goBack() {
    window.location.href = "../../../../OtisPPL.html"
}

function goDone() {
    // Create the options object inside the function to use the latest updatedLegsCount
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 2, //Legs = 1 Push = 2 Pull = 3 Abs = 4 Cardio = 5
            count: updatedPushCount // Use the latest updatedLegsCount
        })
    };
    console.log()

    fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => console.log('Success:', data)) // Handle the parsed data
    .catch(error => console.error('Error:', error)); // Handle any errors
    window.location.href = "../../../../OtisPPL.html"

}

function goToCBPInfo() {
    window.location.href = "../../../../Info/Push/CBP/CBP.html"
}

function goToOPInfo() {
    window.location.href = "../../../../Info/Push/OP/OP.html"
}

function goToDIPInfo() {
    window.location.href = "../../../../Info/Push/DIP/DIP.html"
}

function goToPDInfo() {
    window.location.href = "../../../../Info/Push/PD/PD.html"
}

function goToCLRInfo() {
    window.location.href = "../../../../Info/Push/CLR/CLR.html"
}

function goToCTKInfo() {
    window.location.href = "../../../../Info/Push/CTK/CTK.html"
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/pushCount');
        const data = await response.json();
        
        pushCount = data.value; // Extract the number from the object
        updatedPushCount = pushCount + 1; // Update the variable
        
        console.log('Updated Push Count:', updatedPushCount);

    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }
});







function goAbs() {
    window.location.href = "../Abs/abs.html";
}

var abs = false;
        const absButtons = document.getElementsByClassName('absButton');

        for (let i = 0; i < absButtons.length; i++) {
            if (abs) {
                absButtons[i].style.display = 'block';
            } else {
                absButtons[i].style.display = 'none';
            }
        }

document.addEventListener('DOMContentLoaded', () => {
    const updateInputField = (endpoint, inputId) => {
        fetch(endpoint)
            .then(response => response.json()) // Parse response as JSON
            .then(data => {
                const lastNumber = parseFloat(data.value); // Extract and convert the value to float
                const poLastNumber = lastNumber + 2.5;
                document.getElementById(inputId).placeholder = isNaN(poLastNumber) ? 'Invalid number' : poLastNumber; // Set placeholder
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    // Update input fields when the page loads
    updateInputField('/api/CBP', 'CBP1');
    updateInputField('/api/CBP', 'CBP2');
    updateInputField('/api/CBP', 'CBP3');
    updateInputField('/api/CBP', 'CBP4');

    updateInputField('/api/OP', 'OP1');
    updateInputField('/api/OP', 'OP2');
    updateInputField('/api/OP', 'OP3');
    //updateInputField('/api/OP', 'DL2');

    updateInputField('/api/DIP', 'DIP1');
    updateInputField('/api/DIP', 'DIP2');
    updateInputField('/api/DIP', 'DIP3');
    //updateInputField('/api/OP', 'DL2');

    updateInputField('/api/PD', 'PD1');
    updateInputField('/api/PD', 'PD2');
    updateInputField('/api/PD', 'PD3');
    //updateInputField('/api/OP', 'DL2');

    updateInputField('/api/CLR', 'CLR1');
    updateInputField('/api/CLR', 'CLR2');
    updateInputField('/api/CLR', 'CLR3');
    //updateInputField('/api/OP', 'DL2');

    updateInputField('/api/CTK', 'CTK1');
    updateInputField('/api/CTK', 'CTK2');
    updateInputField('/api/CTK', 'CTK3');
    //updateInputField('/api/OP', 'DL2');
});







// Function to debounce another function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Function to send data to the server
function sendData(input) {
    const identifier = input.id || input.className;


    // Check if the input has a value and it is a valid number
    if (!input || input.value.trim() === '') {
        console.log('Invalid input or input is empty');
        return;
    }

    const value = parseFloat(input.value);
    if (isNaN(value)) {
        console.log('Input value is not a valid number');
        return;
    }

    const data = { text: value, identifier: identifier};
    console.log(identifier)

    // Sending a POST request to the server
    fetch('http://ppllog.xyz/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

const inputFields = document.querySelectorAll('#myForm input[type="number"]');


// Attach event listeners to input fields
function attachBlurListeners() {
    const inputs = document.querySelectorAll('input.blur');

    inputs.forEach(input => {
        let initialValue = input.value; // Store initial value

        // Store the value when the input gains focus
        input.addEventListener('focus', function() {
            initialValue = input.value;
        });

        
    });
}

inputFields.forEach(input => {
    input.addEventListener('blur', function() {
        sendData(this); // Send data of the input field that lost focus
    });
});

document.addEventListener('DOMContentLoaded', attachBlurListeners);



