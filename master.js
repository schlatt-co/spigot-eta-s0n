setInterval(function () {
    $.ajax({
        url: 'https://hub.spigotmc.org/jenkins/view/RSS/job/Bukkit-RSS/api/json',
        type: 'GET'
    }).done(function (data) {
        if (data.nextBuildNumber == 733) {
            return;
        }
        document.getElementById("status").innerHTML = "YEP :)";
        setInterval(function () {
            window.location.replace("https://www.youtube.com/watch?v=d1YBv2mWll0");
        }, 100);
    })
}, 5000);
