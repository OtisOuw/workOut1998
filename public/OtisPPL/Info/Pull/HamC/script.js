// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull2/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [HamCWeight] = await Promise.all([
            fetch('/api/HamC')]);

        // Process each response
        const HamCWeightData = await HamCWeight.json();
        HamCCount = HamCWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${HamCCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

