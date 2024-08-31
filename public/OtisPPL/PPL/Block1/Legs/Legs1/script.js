
let legsCount = 0;
let updatedLegsCount = 0;

const url = 'https://ppllog.xyz/save-count'







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
            name: 1, //Legs = 1 Legs = 2 Pull = 3 Abs = 4 Cardio = 5
            count: updatedLegsCount // Use the latest updatedLegsCount
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

function goToBsqInfo() {
    window.location.href = "../../../../Info/Legs/Bsq/Bsq.html"
}

function goToDLInfo() {
    window.location.href = "../../../../Info/Legs/DL/DL.html"
}

function goToBHTInfo() {
    window.location.href = "../../../../Info/Legs/BHT/BHT.html"
}

function goToDWLInfo() {
    window.location.href = "../../../../Info/Legs/DWL/DWL.html"
}

function goToLEInfo() {
    window.location.href = "../../../../Info/Legs/LE/LE.html"
}

function goToSLCInfo() {
    window.location.href = "../../../../Info/Legs/SLC/SLC.html"
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/LegsCount');
        const data = await response.json();
        
        LegsCount = data.value; // Extract the number from the object
        updatedLegsCount = LegsCount + 1; // Update the variable
        
        console.log('Updated Legs Count:', updatedLegsCount);

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
    updateInputField('/api/Bsq', 'Bsq1');
    updateInputField('/api/Bsq', 'Bsq2');
    updateInputField('/api/Bsq', 'Bsq3');
    updateInputField('/api/Bsq', 'Bsq4');

    updateInputField('/api/DL', 'DL1');
    updateInputField('/api/DL', 'DL2');
    updateInputField('/api/DL', 'DL3');
    updateInputField('/api/DL', 'DL4');

    updateInputField('/api/BHT', 'BHT1');
    updateInputField('/api/BHT', 'BHT2');
    updateInputField('/api/BHT', 'BHT3');
    //updateInputField('/api/DL', 'DL2');

    updateInputField('/api/DWL', 'DWL1');
    updateInputField('/api/DWL', 'DWL2');
    updateInputField('/api/DWL', 'DWL3');
    //updateInputField('/api/DL', 'DL2');

    updateInputField('/api/LE', 'LE1');
    updateInputField('/api/LE', 'LE2');
    updateInputField('/api/LE', 'LE3');
    //updateInputField('/api/DL', 'DL2');

    updateInputField('/api/SLC', 'SLC1');
    updateInputField('/api/SLC', 'SLC2');
    updateInputField('/api/SLC', 'SLC3');
    //updateInputField('/api/DL', 'DL2');
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
    fetch('https://ppllog.xyz/save-data', {
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



