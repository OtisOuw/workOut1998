// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull2/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [CSRWeight] = await Promise.all([
            fetch('/api/CSR')]);

        // Process each response
        const CSRWeightData = await CSRWeight.json();
        CSRCount = CSRWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${CSRCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

