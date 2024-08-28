// script.js
function goBack() {
    window.location.href = "../../../PPL/Block2/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SLCWeight] = await Promise.all([
            fetch('/api/SLC')]);

        // Process each response
        const SLCWeightData = await SLCWeight.json();
        SLCCount = SLCWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SLCCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

