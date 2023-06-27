function calculateProgress() {
    // Retrieve input values
    const totalHours = parseInt(document.getElementById('total-hours').value) || 0;
    const totalMinutes = parseInt(document.getElementById('total-minutes').value) || 0;
    const totalSeconds = parseInt(document.getElementById('total-seconds').value) || 0;
    const currentHours = parseInt(document.getElementById('current-hours').value) || 0;
    const currentMinutes = parseInt(document.getElementById('current-minutes').value) || 0;
    const currentSeconds = parseInt(document.getElementById('current-seconds').value) || 0;

    // Calculate total time in seconds
    const totalTime = (totalHours * 3600) + (totalMinutes * 60) + totalSeconds;

    // Calculate current time in seconds
    const currentTime = (currentHours * 3600) + (currentMinutes * 60) + currentSeconds;

    // Calculate percentage
    const percentage = (currentTime / totalTime) * 100;

    // Display output
    document.getElementById('output').textContent = `You are ${percentage.toFixed(2)}% through the audiobook.`;
}