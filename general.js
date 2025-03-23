document.addEventListener('DOMContentLoaded', () => {
    const sessionsContainer = document.querySelector('.sessions');

    sessionsContainer.addEventListener('click', (e) => { 
        const groupHeader = e.target.closest('.sessions-group-header');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.sessions-group-body');
        const icon = groupHeader.querySelector('i');

        // toggle icon
        icon.classList.toggle('fa-caret-down');
        icon.classList.toggle('fa-caret-right');

        // toggle body
        groupBody.classList.toggle('open');

        // close other bodies
        const otherGroups = sessionsContainer.querySelectorAll('.sessions-group');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.sessions-group-body');
                const otherIcon = otherGroup.querySelector('.sessions-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-caret-down');
                otherIcon.classList.add('fa-caret-right');
            }
        }) 
    });
});

//toggle mobile menu button
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
    });

    // close menu when clicking outside
    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});


