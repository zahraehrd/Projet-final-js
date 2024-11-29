// Événements de la souris
document.querySelectorAll('figure').forEach((element) => {
    element.addEventListener('mouseover', () => {
        console.log('Mouse over detected on figure');
    });
    element.addEventListener('mouseleave', () => {
        console.log('Mouse leave detected on figure');
    });
});

// Événements de focus et blur
document.querySelectorAll('figure').forEach((element) => {
    element.addEventListener('focus', () => {
        console.log('Focus detected on figure');
    });
    element.addEventListener('blur', () => {
        console.log('Blur detected on figure');
    });
});

// Fonction appelée au chargement de la page
window.addEventListener('load', () => {
    console.log('Page fully loaded');
    addTabIndex();
});

// Fonction pour ajouter l'attribut tabindex
function addTabIndex() {
    document.querySelectorAll('figure').forEach((element) => {
        element.setAttribute('tabindex', '0');
    });
    console.log('Attribut tabindex ajouté');
}
