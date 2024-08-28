// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push2/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [OPWeight] = await Promise.all([
            fetch('/api/OP')]);

        // Process each response
        const OPWeightData = await OPWeight.json();
        OPCount = OPWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${OPCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

