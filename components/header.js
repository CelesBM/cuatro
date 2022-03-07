function headerContent(header){
    
    const headerDiv = document.createElement("div");
    
    headerDiv.innerHTML = `
    <div class="header__container">
        <a href="./index.html" class="header__logo">
            <img src="images/LOGO2.jpg" alt="logo-image" class="logo" height="40px" width="85px">
        </a>
    <div class="header__burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>   
    </div>
    <div class="header__menu-link">
    <a href="./portfolio.html" class="link">Portfolio</a>
    <a href="./servicios.html" class="link">Servicios</a>
    <a href="./contacto.html" class="link">Contacto</a>
    </div>
    </div>
    <section class="header__window">
        <div class="header__window-close">X</div>
        <nav class="header__window-nav">
        <ul class="header__window-list">
          <a href="./portfolio.html" class="item-a"><li class="item-li">Portfolio</li></a>
          <a href="./servicios.html" class="item-a"><li class="item-li">Servicios</li></a>
          <a href="./contacto.html" class="item-a"><li class="item-li">Contacto</li></a>
        </ul>
      </nav>
    </section>
    </div>
    `;

    const openButton = headerDiv.querySelector(".header__burger");
    const closeButton = headerDiv.querySelector(".header__window-close");
    const wind = headerDiv.querySelector(".header__window");

    openButton.addEventListener("click", ()=> {wind.style.display = "inherit";});
    closeButton.addEventListener("click", ()=> {wind.style.display = "";});

    header.appendChild(headerDiv);
}