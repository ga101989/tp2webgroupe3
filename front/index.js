


document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelector('.sidebars');
    var sidebarOpen = document.querySelector('.sidebars-ouvert');

    if (sidebar) {
        sidebar.addEventListener('click', function() {
            event.stopPropagation();
            sidebar.classList.toggle('open');
            sidebarOpen.classList.toggle('open');
        });
    }

    document.addEventListener('click', function(event) {
        if (!sidebarOpen.contains(event.target)) { 
            sidebar.classList.remove('open');
            sidebarOpen.classList.remove('open');
        }
    });

});

let lastScroll = 0;
const header = document.querySelector("header nav"); 

loadSection('achat');

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 300) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
});


// Gérer les clics sur la navigation
document.querySelectorAll('.li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.li').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        const section = item.getAttribute('data-section');
        loadSection(section);
    });
});

// Fonction pour charger une section HTML/CSS/JS dynamiquement
async function loadSection(section) {
    const content = document.getElementById('content');

    // Charger le fichier HTML de la section
    const response = await fetch(`./sections/${section}/${section}.html`);
    const html = await response.text();
    content.innerHTML = html;

    // Charger le CSS de la section
    const existingStyle = document.querySelector(`#style-${section}`);
    if (!existingStyle) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `./sections/${section}/${section}.css`;
        link.id = `style-${section}`;
        document.head.appendChild(link);
    }

    // Charger le JS de la section
    const script = document.createElement('script');
    script.src = `./sections/${section}/${section}.js`;
    script.type = 'module';
    document.body.appendChild(script);

}


