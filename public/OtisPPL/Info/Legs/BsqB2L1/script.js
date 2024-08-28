// script.js
function goBack() {
    window.location.href = "../../../PPL/Block2/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [BsqWeight] = await Promise.all([
            fetch('/api/Bsq')]);

        // Process each response
        const BsqWeightData = await BsqWeight.json();
        BsqCount = BsqWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${BsqCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

