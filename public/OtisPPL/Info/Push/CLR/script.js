// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push2/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [CLRWeight] = await Promise.all([
            fetch('/api/CLR')]);

        // Process each response
        const CLRWeightData = await CLRWeight.json();
        CLRCount = CLRWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${CLRCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

