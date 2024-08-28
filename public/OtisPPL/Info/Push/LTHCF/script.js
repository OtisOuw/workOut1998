// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push1/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [LTHCFWeight] = await Promise.all([
            fetch('/api/LTHCF')]);

        // Process each response
        const LTHCFWeightData = await LTHCFWeight.json();
        LTHCFCount = LTHCFWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${LTHCFCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

