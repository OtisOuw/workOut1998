let absCount = 0;
let updatedAbsCount = 0;

const url = 'http://192.168.2.201:3000/save-data'



function goBack() {
    window.location.href = "../../../OtisPPL.html"
}

function goDone() {
    // Create the options object inside the function to use the latest updatedabsCount
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 4, //abs = 1 Push = 2 Pull = 3 Abs = 4 Cardio = 5
            count: updatedAbsCount // Use the latest updatedabsCount
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
    window.location.href = "../../../OtisPPL.html"

}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/absCount');
        const data = await response.json();
        
        absCount = data.value; // Extract the number from the object
        updatedAbsCount = absCount + 1; // Update the variable
        
        console.log('Updated Abs Count:', updatedAbsCount);

    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }
});







