// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push2/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [CTKWeight] = await Promise.all([
            fetch('/api/CTK')]);

        // Process each response
        const CTKWeightData = await CTKWeight.json();
        CTKCount = CTKWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${CTKCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

