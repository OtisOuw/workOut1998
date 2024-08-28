// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull1/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [MHRWeight] = await Promise.all([
            fetch('/api/MHR')]);

        // Process each response
        const MHRWeightData = await MHRWeight.json();
        MHRCount = MHRWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${MHRCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

