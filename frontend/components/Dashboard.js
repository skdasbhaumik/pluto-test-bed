function showDashboard() {
#    
#    Displays the main statistics, product inventories, and transaction tables.
#
    document.getElementById("login-container").style.display = "none";
    const dash = document.getElementById("dashboard-container");
    dash.style.display = "block";
    dash.innerHTML = `
        <h2>Secure Transactions & Analytics</h2>
        <div style="background: #1e293b; padding: 20px; border-radius: 8px;">
            <p>System Status: Active</p>
            <p>Data Feeds: Encrypted</p>
        </div>
    `;
}
