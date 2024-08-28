// script.js
function goBack() {
    window.location.href = "../../../PPL/Block2/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [MHAWeight] = await Promise.all([
            fetch('/api/MHA')]);

        // Process each response
        const MHAWeightData = await MHAWeight.json();
        MHACount = MHAWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${MHACount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

