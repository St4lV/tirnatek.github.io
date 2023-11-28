function updateHeureParis() {
    var date = new Date(); // Récupère l'heure actuelle
    // Obtient l'heure avec le fuseau horaire "Europe/Paris"
    var options = { timeZone: 'Europe/Paris', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var heureParis = date.toLocaleString('en-US', options);

    document.getElementById("heureParis").textContent = heureParis; // Affiche l'heure dans l'élément HTML avec l'ID "heureParis"
    
};
setInterval(updateHeureParis, 1000)
updateHeureParis();