// script.js
function goBack() {
    window.location.href = "../index.html";
    
    // Add other actions here
}

const url = 'https://ppllog.xyz/save-count'

function goToAbs() {
    window.location.href = "PPL/Block1/Abs/abs.html"
}


let pushCount; // Declare pushCount in the global scope

        document.addEventListener('DOMContentLoaded', async () => {
            try {
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
                
                // Log other counts
                //console.log('Push Count:', pushCount);
                //console.log('Pull Count:', pullCount);
                //console.log('Legs Count:', legsCount);
                //console.log('Abs Count:', absCount);

            } catch (error) {
                console.error('Error:', error);
            }
        });

        function goToPush() { //FINISHED

            let resetCount = 0;

            if (pushCount >= 16 && pushCount < 32) { // Go to Block2
                if (pushCount % 2 === 0) {
                    console.log('Push 1');
                    window.location.href='PPL/Block2/Push/Push1/Push.html'
                } else {
                    console.log('Push 2');
                    window.location.href='PPL/Block2/Push/Push2/Push.html'
                }
            }

            if (pushCount >= 32) {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        //Legs = 1 Push = 2 Pull = 3 Abs = 4 Cardio = 5
                        name: 2,
                        count: resetCount // Use the latest updatedPushCount
                    })
                };
                
                fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse the JSON from the response
                })
                .then(data => console.log('Success:', data)) // Handle the parsed data
                .catch(error => console.error('Error:', error)); // Handle any errors
                window.location.href="PPL/Block1/Push/Push1/Push.html"
            }
            

            if (pushCount < 16) { // Go to Block1 
                if (pushCount % 2 === 0) {
                    console.log('Push 1');
                    window.location.href='PPL/Block1/Push/Push1/Push.html'
                } else {
                    console.log('Push 2');
                    window.location.href='PPL/Block1/Push/Push2/Push.html'
                }
            }
            
        }

        function goToPull() { //FINISHED

            let resetCount = 0;

            if (pullCount >= 16 && pullCount < 32) { // Go to Block2
                if (pullCount % 2 === 0) {
                    console.log('pull 1');
                    window.location.href='PPL/Block2/Pull/Pull1/Pull.html'
                } else {
                    console.log('Pull 2');
                    window.location.href='PPL/Block2/Pull/Pull2/Pull.html'
                }
            }

            if (pullCount >= 32) {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        //Legs = 1 Push = 2 Pull = 3 Abs = 4 Cardio = 5
                        name: 3,
                        count: resetCount // Use the latest updatedpullCount
                    })
                };
                
                fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse the JSON from the response
                })
                .then(data => console.log('Success:', data)) // Handle the parsed data
                .catch(error => console.error('Error:', error)); // Handle any errors
                window.location.href="PPL/Block1/Pull/Pull1/Pull.html"
            }
            

            if (pullCount < 16) { // Go to Block1 
                if (pullCount % 2 === 0) {
                    console.log('Pull 1');
                    window.location.href='PPL/Block1/Pull/Pull1/Pull.html'
                } else {
                    console.log('Pull 2');
                    window.location.href='PPL/Block1/Pull/Pull2/Pull.html'
                }
            }
            
        }


        function goToLegs() { //FINISHED

            let resetCount = 0;

            if (legsCount >= 16 && legsCount < 32) { // Go to Block2
                if (legsCount % 2 === 0) {
                    console.log('Legs 1');
                    window.location.href='PPL/Block2/Legs/Legs1/Legs.html'
                } else {
                    console.log('Legs 2');
                    window.location.href='PPL/Block2/Legs/Legs2/Legs.html'
                }
            }

            if (legsCount >= 32) {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        //Legs = 1 Push = 2 Pull = 3 Abs = 4 Cardio = 5
                        name: 1, 
                        count: resetCount // Use the latest updatedLegsCount
                    })
                };
                
                fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse the JSON from the response
                })
                .then(data => console.log('Success:', data)) // Handle the parsed data
                .catch(error => console.error('Error:', error)); // Handle any errors
                window.location.href="PPL/Block1/Legs/Legs1/Legs.html"
            }
            

            if (legsCount < 16) { // Go to Block1 
                if (legsCount % 2 === 0) {
                    console.log('Legs 1');
                    window.location.href='PPL/Block1/Legs/Legs1/Legs.html'
                } else {
                    console.log('Legs 2');
                    window.location.href='PPL/Block1/Legs/Legs2/Legs.html'
                }
            }
            
        }




