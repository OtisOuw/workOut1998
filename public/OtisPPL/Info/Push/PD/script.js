// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push2/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [PDWeight] = await Promise.all([
            fetch('/api/PD')]);

        // Process each response
        const PDWeightData = await PDWeight.json();
        PDCount = PDWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${PDCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

