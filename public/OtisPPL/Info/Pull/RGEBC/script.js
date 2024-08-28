// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull1/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [RGEBCWeight] = await Promise.all([
            fetch('/api/RGEBC')]);

        // Process each response
        const RGEBCWeightData = await RGEBCWeight.json();
        RGEBCCount = RGEBCWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${RGEBCCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

