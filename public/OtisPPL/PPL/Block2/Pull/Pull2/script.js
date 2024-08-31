let pullCount = 0;
let updatedPullCount = 0;

const url = 'http://ppllog.xyz/save-count'







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

function goToSealRInfo() {
    window.location.href = "../../../../Info/Pull/SealR2/SealR.html"
}

function goToSAPInfo() {
    window.location.href = "../../../../Info/Pull/SAP2/SAP.html"
}

function goToKSACPOInfo() {
    window.location.href = "../../../../Info/Pull/KSACPO/KSACPO.html"
}

function goToRPDInfo() {
    window.location.href = "../../../../Info/Pull/RPD/RPD.html"
}

function goToDPCInfo() {
    window.location.href = "../../../../Info/Pull/DPC2/DPC.html"
}

function goToDHCInfo() {
    window.location.href = "../../../../Info/Pull/DHC/DHC.html"
}

function goToDumbSupCurlInfo() {
    window.location.href = "../../../../Info/Pull/DumbSupCurl/DumbSupCurl.html"
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
    updateInputField('/api/SealR', 'SealR1');
    updateInputField('/api/SealR', 'SealR2');
    updateInputField('/api/SealR', 'SealR3');
    //updateInputField('/api/SealR', 'SealR4');

    updateInputField('/api/KSACPO', 'KSACPO1');
    updateInputField('/api/KSACPO', 'KSACPO2');
    updateInputField('/api/KSACPO', 'KSACPO3');
    //updateInputField('/api/KSACPO', 'KSACPO4');

    updateInputField('/api/RPD', 'RPD1');
    updateInputField('/api/RPD', 'RPD2');
    updateInputField('/api/RPD', 'RPD3');
    //updateInputField('/api/KSACPO', 'DL2');

    updateInputField('/api/DPC', 'DPC1');
    updateInputField('/api/DPC', 'DPC2');
    updateInputField('/api/DPC', 'DPC3');
    //updateInputField('/api/KSACPO', 'DL2');

    updateInputField('/api/DHC', 'DHC1');
    updateInputField('/api/DHC', 'DHC2');
    updateInputField('/api/DHC', 'DHC3');
    //updateInputField('/api/KSACPO', 'DL2');

    updateInputField('/api/DumbSupCurl', 'DumbSupCurl1');
    updateInputField('/api/DumbSupCurl', 'DumbSupCurl2');
    updateInputField('/api/DumbSupCurl', 'DumbSupCurl3');
    //updateInputField('/api/KSACPO', 'DL2');

    updateInputField('/api/SAP', 'SAP1');
    updateInputField('/api/SAP', 'SAP2');
    updateInputField('/api/SAP', 'SAP3');
    //updateInputField('/api/KSACPO', 'DL2');
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



