// script.js
function goBack() {
    window.location.href = "../../../PPL/Block1/Pull/Pull1/Pull.html";
    
    // Add other actions here
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Start fetching all counts concurrently
        const [SGEBCWeight] = await Promise.all([
            fetch('/api/SGEBC')]);

        // Process each response
        const SGEBCWeightData = await SGEBCWeight.json();
        SGEBCCount = SGEBCWeightData.value; // Assign value to global variable
        const exerciseWeightElement = document.querySelector('.ExcerciseWeight');
        exerciseWeightElement.textContent = `WEIGHT: ${SGEBCCount} Kg`;

    } catch (error) {
        console.error('Error:', error);
    }
});

