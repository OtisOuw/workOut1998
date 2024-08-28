// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Legs/Legs2/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SLPWeight] = await Promise.all([
            fetch('/api/SLP')]);

        // Process each response
        const SLPWeightData = await SLPWeight.json();
        SLPCount = SLPWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SLPCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

