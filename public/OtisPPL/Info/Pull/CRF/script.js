// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull2/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [CRFWeight] = await Promise.all([
            fetch('/api/CRF')]);

        // Process each response
        const CRFWeightData = await CRFWeight.json();
        CRFCount = CRFWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${CRFCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

