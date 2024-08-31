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
            name: 2, //pull = 1 Pull = 2 Pull = 3 Abs = 4 Cardio = 5
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

function goToAPInfo() {
    window.location.href = "../../../../Info/Pull/AP2/AP.html"
}

function goToBPInfo() {
    window.location.href = "../../../../Info/Pull/BP2/BP.html"
}

function goToCBPInfo() {
    window.location.href = "../../../../Info/Pull/CBP/CBP.html"
}

function goToLTHCFInfo() {
    window.location.href = "../../../../Info/Pull/LTHCF/LTHCF.html"
}

function goToBFSCInfo() {
    window.location.href = "../../../../Info/Pull/BFSC2/BFSC.html"
}

function goToELRInfo() {
    window.location.href = "../../../../Info/Pull/ELR/ELR.html"
}

function goToROTEInfo() {
    window.location.href = "../../../../Info/Pull/ROTE/ROTE.html"
}

function goToHLRInfo() {
    window.location.href = "../../../../Info/Pull/HLR/HLR.html"
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
    updateInputField('/api/AP', 'AP1');
    updateInputField('/api/AP', 'AP2');
    updateInputField('/api/AP', 'AP3');
    //updateInputField('/api/AP', 'AP4');

    updateInputField('/api/CBP', 'CBP1');
    updateInputField('/api/CBP', 'CBP2');
    updateInputField('/api/CBP', 'CBP3');
    //updateInputField('/api/CBP', 'CBP4');

    updateInputField('/api/LTHCF', 'LTHCF1');
    updateInputField('/api/LTHCF', 'LTHCF2');
    updateInputField('/api/LTHCF', 'LTHCF3');
    //updateInputField('/api/CBP', 'DL2');

    updateInputField('/api/BFSC', 'BFSC1');
    updateInputField('/api/BFSC', 'BFSC2');
    updateInputField('/api/BFSC', 'BFSC3');
    //updateInputField('/api/CBP', 'DL2');

    updateInputField('/api/ELR', 'ELR1');
    updateInputField('/api/ELR', 'ELR2');
    updateInputField('/api/ELR', 'ELR3');
    //updateInputField('/api/CBP', 'DL2');

    updateInputField('/api/ROTE', 'ROTE1');
    updateInputField('/api/ROTE', 'ROTE2');
    updateInputField('/api/ROTE', 'ROTE3');
    //updateInputField('/api/CBP', 'DL2');

    updateInputField('/api/HLR', 'HLR1');
    updateInputField('/api/HLR', 'HLR2');
    updateInputField('/api/HLR', 'HLR3');
    //updateInputField('/api/CBP', 'DL2');

    updateInputField('/api/BP', 'BP1');
    updateInputField('/api/BP', 'BP2');
    updateInputField('/api/BP', 'BP3');
    //updateInputField('/api/CBP', 'DL2');
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



