// Digital Clock - Real-time clock display
function updateClock() {
    
    const now = new Date();

    // Format time (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    // Format date (Day, Month Date, Year)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const dateString = `${dayName}, ${monthName} ${date}, ${year}`;

    
    document.getElementById('timeDisplay').textContent = timeString;
    document.getElementById('dateDisplay').textContent = dateString;
}
// Initial call to display clock immediately
updateClock();
setInterval(updateClock, 1); // Update every millisecond
