// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull2/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SACCWeight] = await Promise.all([
            fetch('/api/SACC')]);

        // Process each response
        const SACCWeightData = await SACCWeight.json();
        SACCCount = SACCWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SACCCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

