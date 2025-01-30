


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
