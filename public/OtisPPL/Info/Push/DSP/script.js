// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push1/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [DSPWeight] = await Promise.all([
            fetch('/api/DSP')]);

        // Process each response
        const DSPWeightData = await DSPWeight.json();
        DSPCount = DSPWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${DSPCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

