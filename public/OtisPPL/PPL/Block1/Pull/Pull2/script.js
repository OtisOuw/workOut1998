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

function goToCSEORInfo() {
    window.location.href = "../../../../Info/Pull/CSEOR/CSEOR.html"
}

function goToNGPInfo() {
    window.location.href = "../../../../Info/Pull/NGP/NGP.html"
}

function goToCSRInfo() {
    window.location.href = "../../../../Info/Pull/CSR/CSR.html"
}

function goToKSACPOInfo() {
    window.location.href = "../../../../Info/Pull/KSACPO/KSACPO.html"
}

function goToSGBSInfo() {
    window.location.href = "../../../../Info/Pull/SGBS/SGBS.html"
}

function goToCRFInfo() {
    window.location.href = "../../../../Info/Pull/CRF/CRF.html"
}

function goToSACCInfo() {
    window.location.href = "../../../../Info/Pull/SACC/SACC.html"
}

function goToHamCInfo() {
    window.location.href = "../../../../Info/Pull/HamC/HamC.html"
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
    updateInputField('/api/CSEOR', 'CSEOR1');
    updateInputField('/api/CSEOR', 'CSEOR2');
    updateInputField('/api/CSEOR', 'CSEOR3');
    //updateInputField('/api/CSEOR', 'CSEOR4');

    updateInputField('/api/CSR', 'CSR1');
    updateInputField('/api/CSR', 'CSR2');
    updateInputField('/api/CSR', 'CSR3');
    //updateInputField('/api/CSR', 'CSR4');

    updateInputField('/api/KSACPO', 'KSACPO1');
    updateInputField('/api/KSACPO', 'KSACPO2');
    updateInputField('/api/KSACPO', 'KSACPO3');
    //updateInputField('/api/CSR', 'DL2');

    updateInputField('/api/SGBS', 'SGBS1');
    updateInputField('/api/SGBS', 'SGBS2');
    updateInputField('/api/SGBS', 'SGBS3');
    //updateInputField('/api/CSR', 'DL2');

    updateInputField('/api/CRF', 'CRF1');
    updateInputField('/api/CRF', 'CRF2');
    updateInputField('/api/CRF', 'CRF3');
    //updateInputField('/api/CSR', 'DL2');

    updateInputField('/api/SACC', 'SACC1');
    updateInputField('/api/SACC', 'SACC2');
    updateInputField('/api/SACC', 'SACC3');
    //updateInputField('/api/CSR', 'DL2');

    updateInputField('/api/HamC', 'HamC1');
    updateInputField('/api/HamC', 'HamC2');
    updateInputField('/api/HamC', 'HamC3');
    //updateInputField('/api/CSR', 'DL2');

    updateInputField('/api/NGP', 'NGP1');
    updateInputField('/api/NGP', 'NGP2');
    updateInputField('/api/NGP', 'NGP3');
    //updateInputField('/api/CSR', 'DL2');
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



