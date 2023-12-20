function updateGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    var greetingElement = document.getElementById('greeting');

    if (currentHour < 12) {
        greetingElement.innerHTML = 'Selamat Pagi!';
    } else if (currentHour < 18) {
        greetingElement.innerHTML = 'Selamat Siang!';
    } else {
        greetingElement.innerHTML = 'Selamat Malam!';
    }
}

function updateTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var clockElement = document.getElementById('clock');
    clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;

    var dateElement = document.getElementById('date');
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerHTML = currentTime.toLocaleDateString('en-US', options);
}

// Update greeting, time, and date every second
setInterval(function() {
    updateGreeting();
    updateTime();
}, 1000);

// Initial call to display greeting, time, and date immediately
updateGreeting();
updateTime();