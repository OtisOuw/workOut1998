// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Legs/Legs2/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SLLEWeight] = await Promise.all([
            fetch('/api/SLLE')]);

        // Process each response
        const SLLEWeightData = await SLLEWeight.json();
        SLLECount = SLLEWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SLLECount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

