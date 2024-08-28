// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push1/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [bpWeight] = await Promise.all([
            fetch('/api/Bsq')]);

        // Process each response
        const bpWeightData = await bpWeight.json();
        bpCount = bpWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${bpCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

