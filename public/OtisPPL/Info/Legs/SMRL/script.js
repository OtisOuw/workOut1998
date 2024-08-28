// script.js
function goBack() {
    window.location.href = "../../../PPL/Block2/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SMRLWeight] = await Promise.all([
            fetch('/api/SMRL')]);

        // Process each response
        const SMRLWeightData = await SMRLWeight.json();
        SMRLCount = SMRLWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SMRLCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

