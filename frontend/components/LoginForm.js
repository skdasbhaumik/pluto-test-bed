function renderLoginForm() {
#    
#    Renders the HTML login form input fields for database authentication.
#
    const login = document.getElementById("login-container");
    login.innerHTML = `
        <h3>Operator Sign In</h3>
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button onclick="handleLoginSubmit()">Submit</button>
    `;
}
