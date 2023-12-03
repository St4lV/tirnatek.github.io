document.addEventListener('DOMContentLoaded', function () {
    var lecteurAudio = document.getElementById("lecteurAudio");
    var sourceAudio = "";

    document.querySelectorAll(".audioButton").forEach(function (button) {
        button.addEventListener('click', function () {
            sourceAudio = this.getAttribute("data-source");
            lecteurAudio.pause();
            lecteurAudio.setAttribute('src', '');
            lecteurAudio.load();
            lecteurAudio.setAttribute("src", sourceAudio);
            lecteurAudio.play();
        });
    });
    updateHeureParis();
    setInterval(updateHeureParis, 1000);
});

function updateHeureParis() {
    var date = new Date();
    var options = { timeZone: 'Europe/Paris', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("heureParis").textContent = date.toLocaleString('en-US', options);
}