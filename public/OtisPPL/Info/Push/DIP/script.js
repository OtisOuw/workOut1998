// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Push/Push2/Push.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [DIPWeight] = await Promise.all([
            fetch('/api/DIP')]);

        // Process each response
        const DIPWeightData = await DIPWeight.json();
        DIPCount = DIPWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${DIPCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

