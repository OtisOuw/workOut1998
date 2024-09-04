let pullCount = 0;
let updatedPullCount = 0;

const url = 'https://ppllog.xyz/save-count'







function goBack() {
    window.location.href = "../../../../OtisPPL.html"
}

function goDone() {
    // Create the options object inside the function to use the latest updatedpullCount
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 1, //pull = 1 Legs = 2 Legs = 3 Abs = 4 Cardio = 5
            count: updatedPullCount // Use the latest updatedpullCount
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

function goToDLInfo() {
    window.location.href = "../../../../Info/Legs/DL3/DL.html"
}

function goToTBSQInfo() {
    window.location.href = "../../../../Info/Legs/TBSQ/TBSQ.html"
}

function goToRBDHInfo() {
    window.location.href = "../../../../Info/Legs/RBDH/RBDH.html"
}

function goToSMRLInfo() {
    window.location.href = "../../../../Info/Legs/SMRL/SMRL.html"
}

function goToLEInfo() {
    window.location.href = "../../../../Info/Legs/LEB2L1/LE.html"
}

function goToLLCInfo() {
    window.location.href = "../../../../Info/Legs/LLC/LLC.html"
}

function goToMHAInfo() {
    window.location.href = "../../../../Info/Legs/MHA/MHA.html"
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/legsCount');
        const data = await response.json();
        
        pullCount = data.value; // Extract the number from the object
        updatedPullCount = pullCount + 1; // Update the variable
        
        console.log('Updated Legs Count:', updatedPullCount);

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
    updateInputField('/api/DL', 'DL1');
    updateInputField('/api/DL', 'DL2');
    updateInputField('/api/DL', 'DL3');
    updateInputField('/api/DL', 'DL4');

    updateInputField('/api/TBSQ', 'TBSQ1');
    updateInputField('/api/TBSQ', 'TBSQ2');
    updateInputField('/api/TBSQ', 'TBSQ3');
    updateInputField('/api/TBSQ', 'TBSQ4');

    updateInputField('/api/RBDH', 'RBDH1');
    updateInputField('/api/RBDH', 'RBDH2');
    updateInputField('/api/RBDH', 'RBDH3');
    //updateInputField('/api/TBSQ', 'DL2');

    updateInputField('/api/SMRL', 'SMRL1');
    updateInputField('/api/SMRL', 'SMRL2');
    updateInputField('/api/SMRL', 'SMRL3');
    //updateInputField('/api/TBSQ', 'DL2');

    updateInputField('/api/LE', 'LE1');
    updateInputField('/api/LE', 'LE2');
    updateInputField('/api/LE', 'LE3');
    //updateInputField('/api/TBSQ', 'DL2');

    updateInputField('/api/LLC', 'LLC1');
    updateInputField('/api/LLC', 'LLC2');
    updateInputField('/api/LLC', 'LLC3');
    //updateInputField('/api/TBSQ', 'DL2');

    updateInputField('/api/MHA', 'MHA1');
    updateInputField('/api/MHA', 'MHA2');
    updateInputField('/api/MHA', 'MHA3');
    //updateInputField('/api/TBSQ', 'DL2');
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
    fetch('https://ppllog.xyz/api/save-data', {
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



