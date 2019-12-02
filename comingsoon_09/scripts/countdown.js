
    var deadline = new Date("May 6, 2020 23:59:59").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24)).toString();
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)).toString();
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)).toString();
        var seconds = Math.floor((t % (1000 * 60)) / 1000).toString();
        document.getElementsByClassName('days')[0].textContent = days;
        document.getElementsByClassName('hours')[0].textContent = hours;
        document.getElementsByClassName('minutes')[0].textContent = minutes;
        document.getElementsByClassName('seconds')[0].textContent = seconds;
        if (t < 0) {
            clearInterval(x);
            document.getElementsByClassName('days').innerHTML = "0";
            document.getElementsByClassName('hours').innerHTML = "0";
            document.getElementsByClassName('minutes').innerHTML = "0";
            document.getElementsByClassName('seconds').innerHTML = "0";
        }
    }, 1000);

