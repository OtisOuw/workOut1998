// script.js
function goBack() {
    window.location.href = "../../../PPL/Block2/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [RBDHWeight] = await Promise.all([
            fetch('/api/RBDH')]);

        // Process each response
        const RBDHWeightData = await RBDHWeight.json();
        RBDHCount = RBDHWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${RBDHCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

