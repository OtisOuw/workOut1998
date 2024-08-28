// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [DLWeight] = await Promise.all([
            fetch('/api/DL')]);

        // Process each response
        const DLWeightData = await DLWeight.json();
        DLCount = DLWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${DLCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

