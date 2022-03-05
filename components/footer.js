function footerContent(footer){

    const footerDiv = document.createElement("div");

    footerDiv.innerHTML = `
<footer class="section-footer">
    <div class="section-footer__logo">
        <img class="section-footer__logo-image" src="images/LOGO2.jpg" alt="logo__footer">
    </div>
    <div class="container-social-media">
        <div class="instagram">
            <p class="name-social-media">Instagram</p>
            <img class="instagram-image" src="https://www.transparentpng.com/thumb/logo-instagram/mrG45j-instagram-black-logo-free-download.png" alt="instagram-image">
        </div>
        <div class="linkedin">
            <p class="name-social-media">Linkedin</p>
            <img class="linkedin-image" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="linkedin-image">
        </div>
        <div class="github">    
            <p class="name-social-media">Github</p>
            <img class="github-image" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github-image">
        </div>
    </div>
</footer>
    `;

    footer.appendChild(footerDiv);
}