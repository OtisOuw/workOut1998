// script.js
function goBack() {
    window.location.href = "../../index.html";
    
    // Add other actions here
}

const url = 'https://ppllog.xyz/save-count'




let pushCount; // Declare pushCount in the global scope

        document.addEventListener('DOMContentLoaded', async () => {
            try {

                const legsButton = document.querySelector('.legsButton');
                const pushButton = document.querySelector('.pushButton');
                const absButton = document.querySelector('.absButton');
                const pullButton = document.querySelector('.pullButton');


                // Start fetching all counts concurrently
                const [pushResponse, pullResponse, legsResponse, absResponse] = await Promise.all([
                    fetch('/api/pushCount'),
                    fetch('/api/pullCount'),
                    fetch('/api/legsCount'),
                    fetch('/api/absCount')
                ]);

                // Process each response
                const pushData = await pushResponse.json();
                const pullData = await pullResponse.json();
                const legsData = await legsResponse.json();
                const absData = await absResponse.json();
                
                pushCount = pushData.value; // Assign value to global variable
                pullCount = pullData.value;
                legsCount = legsData.value;
                absCount = absData.value;

                console.log(pushCount + ' ' + pullCount + ' ' + legsCount + ' ' + absCount)



            } catch (error) {
                console.error('Error:', error);
            }
        });




        document.addEventListener('DOMContentLoaded', () => {
            const updateInputField = (endpoint, inputId, originalText) => {
                fetch(endpoint)
                    .then(response => response.json()) // Parse response as JSON
                    .then(data => {
                        const lastNumber = parseFloat(data.value);
                        const inputElement = document.getElementById(inputId);
    
                        if (inputElement) {
                            const newPlaceholder = isNaN(lastNumber) ? 'Invalid number' : originalText.replace('?', lastNumber);
                            inputElement.placeholder = newPlaceholder;
                        } else {
                            console.error(`Element with ID ${inputId} not found`);
                        }
                    })
                    .catch(error => console.error('Error fetching data:', error));
            }
            const placeholders = {
                'Push': 'Push: ?',
                'Pull': 'Pull: ?',
                'Legs': 'Legs: ?',
                'Abs': 'Abs: ?'
            };
            updateInputField('/api/pushCount', 'Push', placeholders['Push']);
            updateInputField('/api/pullCount', 'Pull', placeholders['Pull']);
            updateInputField('/api/legsCount', 'Legs', placeholders['Legs']);
            updateInputField('/api/absCount', 'Abs', placeholders['Abs']);
        });




        function sendData(input) {
            const identifier = input.id || input.id;
                
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
            fetch('http://localhost:3000/save-data', {
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

        






  