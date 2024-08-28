// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push1/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [DLRWeight] = await Promise.all([
            fetch('/api/DLR')]);

        // Process each response
        const DLRWeightData = await DLRWeight.json();
        DLRCount = DLRWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${DLRCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

