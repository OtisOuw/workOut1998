// script.js
function goBack() {
    window.location.href = "../../../PPL/Block2/Legs/Legs1/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [TBSQWeight] = await Promise.all([
            fetch('/api/TBSQ')]);

        // Process each response
        const TBSQWeightData = await TBSQWeight.json();
        TBSQCount = TBSQWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${TBSQCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

