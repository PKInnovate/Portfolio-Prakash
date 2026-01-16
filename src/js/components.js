export function injectHeader() {
    const navbar = `
    <nav id="navbar">
        <div class="container">
            <div class="logo"><a href="index.html" style="text-decoration: none; color: inherit;">PRAKASH</a></div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="ventures.html">Ventures</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbar);
}

export function injectFooter() {
    const footer = `
    <footer>
        <div class="container">
            <p>&copy; 2026 Prakash. All rights reserved. Forward-thinking innovation.</p>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
}
