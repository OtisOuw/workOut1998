// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Legs/Legs2/Legs.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [FQWeight] = await Promise.all([
            fetch('/api/FQ')]);

        // Process each response
        const FQWeightData = await FQWeight.json();
        FQCount = FQWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${FQCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

