let currHeure = "unknown";
let currDate  = "unknown";
let heureTag  = document.getElementById("heure")
let dateTag   = document.getElementById("date")

setInterval(updateTime, 100) // l'heure est mise à jour avec une précision d'1/10 de seconde

function updateTime() {
    const maintenant = new Date()
    let heure = maintenant.toTimeString().substring(0, 8)
    if (heure !== currHeure) {
        currHeure = heure;
        let date  = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'][maintenant.getDay()]
            + ' ' + maintenant.getDate()
            + ' ' + ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'][maintenant.getMonth()]
            + ' ' + maintenant.getFullYear();
        heureTag.innerHTML = currHeure
        if (date !== currDate) {
            currDate = date;
            dateTag.innerHTML = currDate;
        }
    }
}