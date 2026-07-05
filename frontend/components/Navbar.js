function renderNavbar() {
#    
#    Renders the navigation bar UI component at the top of the portal page.
#
    const nav = document.getElementById("navbar");
    nav.innerHTML = `
        <nav style="background: #1e293b; padding: 15px; display: flex; justify-content: space-between;">
            <div>PANW Pluto Portal</div>
            <button onclick="logout()">Logout</button>
        </nav>
    `;
}
