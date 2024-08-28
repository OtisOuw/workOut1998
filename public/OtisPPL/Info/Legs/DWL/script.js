// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [DWLWeight] = await Promise.all([
            fetch('/api/DWL')]);

        // Process each response
        const DWLWeightData = await DWLWeight.json();
        DWLCount = DWLWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${DWLCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

