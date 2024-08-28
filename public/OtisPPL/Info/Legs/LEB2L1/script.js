// script.js
function goBack() {
    window.location.href = "../../../PPL/Block2/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [LEWeight] = await Promise.all([
            fetch('/api/LE')]);

        // Process each response
        const LEWeightData = await LEWeight.json();
        LECount = LEWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${LECount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

