// Main Application Entrypoint
function initApp() {
#    
#    Initializes the frontend app, mounts components, and checks authentication.
#
    renderNavbar();
    if (checkSession()) {
        showDashboard();
    } else {
        renderLoginForm();
    }
}
window.onload = initApp;
