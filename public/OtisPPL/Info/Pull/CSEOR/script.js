// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull2/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [CSEORWeight] = await Promise.all([
            fetch('/api/CSEOR')]);

        // Process each response
        const CSEORWeightData = await CSEORWeight.json();
        CSEORCount = CSEORWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${CSEORCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

