// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull2/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SGBSWeight] = await Promise.all([
            fetch('/api/SGBS')]);

        // Process each response
        const SGBSWeightData = await SGBSWeight.json();
        SGBSCount = SGBSWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SGBSCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

