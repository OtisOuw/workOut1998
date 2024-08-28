// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull2/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [NGPWeight] = await Promise.all([
            fetch('/api/NGP')]);

        // Process each response
        const NGPWeightData = await NGPWeight.json();
        NGPCount = NGPWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${NGPCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

