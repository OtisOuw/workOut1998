// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull1/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [LPWeight] = await Promise.all([
            fetch('/api/LP')]);

        // Process each response
        const LPWeightData = await LPWeight.json();
        LPCount = LPWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${LPCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

