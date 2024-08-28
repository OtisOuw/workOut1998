// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push2/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [CBPWeight] = await Promise.all([
            fetch('/api/CBP')]);

        // Process each response
        const CBPWeightData = await CBPWeight.json();
        CBPCount = CBPWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${CBPCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

