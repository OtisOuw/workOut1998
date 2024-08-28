// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Legs/Legs2/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SLLCWeight] = await Promise.all([
            fetch('/api/SLLC')]);

        // Process each response
        const SLLCWeightData = await SLLCWeight.json();
        SLLCCount = SLLCWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SLLCCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

