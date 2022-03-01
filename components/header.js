function headerContent(header){
    
    const headerDiv = document.createElement("div");
    
    headerDiv.innerHTML = `
    <div class="header__container">
        <h2 class="header__logo">
            <img src="/LOGO2.jpg" alt="logo-image" class="logo" height="90px" width="150px">
        </h2>
    <div class="header__burger">
      <div class="a"></div>
      <div class="b"></div>
      <div class="c"></div>   
    </div>
    </div>
    <div class="header__menu-link">
        <a class="1" href="./portfolio.html">Portfolio</a>
        <a class="2" href="./servicios.html">Servicios</a>
        <a class="3" href="./contacto.html">Contacto</a>
    </div>
    <section class="header__window">
        <div class="header__window-close">
            <button class="header__window-close-button">X</button>
        </div>
        <div class="header__window-options">
            <a class="1" href="./portfolio.html">Portfolio</a>
            <a class="2" href="./servicios.html">Servicios</a>
            <a class="3" href="./contacto.html">Contacto</a>
        </div>
    </section>
    </div>
    `;


    const openButton = headerDiv.querySelector(".header__burguer");
    const closeButton = headerDiv.querySelector(".header__window-close");
    const window = headerDiv.querySelector(".header__window");

    openButton.addEventListener("click", ()=> {window.style.display = "inherit";});
    closeButton.addEventListener("click", ()=> {window.style.display = "";});

    header.appendChild(headerDiv);
}

