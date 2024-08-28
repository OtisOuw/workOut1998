// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push1/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [DISCWeight] = await Promise.all([
            fetch('/api/DISC')]);

        // Process each response
        const DISCWeightData = await DISCWeight.json();
        DISCCount = DISCWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${DISCCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

