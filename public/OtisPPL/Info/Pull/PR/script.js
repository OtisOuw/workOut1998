// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull1/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [PRWeight] = await Promise.all([
            fetch('/api/PR')]);

        // Process each response
        const PRWeightData = await PRWeight.json();
        PRCount = PRWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${PRCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

