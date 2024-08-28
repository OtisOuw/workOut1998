// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull1/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SFPWeight] = await Promise.all([
            fetch('/api/SFP')]);

        // Process each response
        const SFPWeightData = await SFPWeight.json();
        SFPCount = SFPWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SFPCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

