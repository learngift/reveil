let currHeure = "unknown";
let currDate  = "unknown";
let heureTag  = document.getElementById("heure")
let dateTag   = document.getElementById("date")
let fenetreAjustement = document.getElementById("fenetreAjuster");

setInterval(updateTime, 100)

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

document.getElementById("ajuster").addEventListener('click',
    () => fenetreAjustement.classList.add('is--visible'));

document.getElementsByClassName("fermeFenetreAjuster")[0].addEventListener('click',
    () => fenetreAjustement.classList.remove('is--visible'));
