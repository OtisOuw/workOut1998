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
            name: 3, //pull = 1 Pull = 2 Pull = 3 Abs = 4 Cardio = 5
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

function goToPUInfo() {
    window.location.href = "../../../../Info/Pull/PU2/PU.html"
}

function goToLPInfo() {
    window.location.href = "../../../../Info/Pull/LP2/LP.html"
}

function goToDOARInfo() {
    window.location.href = "../../../../Info/Pull/DOAR/DOAR.html"
}

function goToCSTRInfo() {
    window.location.href = "../../../../Info/Pull/CSTR/CSTR.html"
}

function goToCRFInfo() {
    window.location.href = "../../../../Info/Pull/CRF2/CRF.html"
}

function goToRURInfo() {
    window.location.href = "../../../../Info/Pull/RUR/RUR.html"
}

function goToDSCInfo() {
    window.location.href = "../../../../Info/Pull/DSC/DSC.html"
}

function goToSPIDERCInfo() {
    window.location.href = "../../../../Info/Pull/SPIDERC/SPIDERC.html"
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/pullCount');
        const data = await response.json();
        
        pullCount = data.value; // Extract the number from the object
        updatedPullCount = pullCount + 1; // Update the variable
        
        console.log('Updated Pull Count:', updatedPullCount);

    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }
});


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
    updateInputField('/api/PU', 'PU1');
    updateInputField('/api/PU', 'PU2');
    updateInputField('/api/PU', 'PU3');
    //updateInputField('/api/PU', 'PU4');

    updateInputField('/api/DOAR', 'DOAR1');
    updateInputField('/api/DOAR', 'DOAR2');
    updateInputField('/api/DOAR', 'DOAR3');
    //updateInputField('/api/DOAR', 'DOAR4');

    updateInputField('/api/CSTR', 'CSTR1');
    updateInputField('/api/CSTR', 'CSTR2');
    updateInputField('/api/CSTR', 'CSTR3');
    //updateInputField('/api/DOAR', 'DL2');

    updateInputField('/api/CRF', 'CRF1');
    updateInputField('/api/CRF', 'CRF2');
    updateInputField('/api/CRF', 'CRF3');
    //updateInputField('/api/DOAR', 'DL2');

    updateInputField('/api/RUR', 'RUR1');
    updateInputField('/api/RUR', 'RUR2');
    updateInputField('/api/RUR', 'RUR3');
    //updateInputField('/api/DOAR', 'DL2');

    updateInputField('/api/DSC', 'DSC1');
    updateInputField('/api/DSC', 'DSC2');
    updateInputField('/api/DSC', 'DSC3');
    //updateInputField('/api/DOAR', 'DL2');

    updateInputField('/api/SPIDERC', 'SPIDERC1');
    updateInputField('/api/SPIDERC', 'SPIDERC2');
    updateInputField('/api/SPIDERC', 'SPIDERC3');
    //updateInputField('/api/DOAR', 'DL2');

    updateInputField('/api/LP', 'LP1');
    updateInputField('/api/LP', 'LP2');
    updateInputField('/api/LP', 'LP3');
    //updateInputField('/api/DOAR', 'DL2');
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



