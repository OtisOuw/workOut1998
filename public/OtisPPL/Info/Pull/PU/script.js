// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull1/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [PUWeight] = await Promise.all([
            fetch('/api/PU')]);

        // Process each response
        const PUWeightData = await PUWeight.json();
        PUCount = PUWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${PUCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

