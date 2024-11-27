//client side javascript
//imported in <script> tag in the astro page
//console.log("javascript");
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
    });