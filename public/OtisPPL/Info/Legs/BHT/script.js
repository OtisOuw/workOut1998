// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [BHTWeight] = await Promise.all([
            fetch('/api/BHT')]);

        // Process each response
        const BHTWeightData = await BHTWeight.json();
        BHTCount = BHTWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${BHTCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

