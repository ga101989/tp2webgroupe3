


document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelector('.sidebars');
    var sidebarOpen = document.querySelector('.sidebars-ouvert');

    if (sidebar) {
        sidebar.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            sidebarOpen.classList.toggle('open');
        });
    }
});
