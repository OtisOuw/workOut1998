// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull2/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [KSACPOWeight] = await Promise.all([
            fetch('/api/KSACPO')]);

        // Process each response
        const KSACPOWeightData = await KSACPOWeight.json();
        KSACPOCount = KSACPOWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${KSACPOCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

