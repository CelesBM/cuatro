function headerContent(header){
    
    const headerDiv = document.createElement("div");
    
    headerDiv.innerHTML = `
    <div class="header__container">
        <h2 class="header__logo">
            <img src="images/LOGO2.jpg" alt="logo-image" class="logo" height="60px" width="100px">
        </h2>
    <div class="header__burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>   
    </div>
    </div>
    <div class="header__menu-link">
        <a href="./portfolio.html" class="link">Portfolio</a>
        <a href="./servicios.html" class="link">Servicios</a>
        <a href="./contacto.html" class="link">Contacto</a>
    </div>
    <section class="header__window">
        <div class="header__window-close">X</div>
        <nav class="header__window-nav">
        <ul class="header__window-list">
          <a href="./portfolio.html" class="item-a"><li class="item-li">Portfolio</li></a>
          <a href="./services.html" class="item-a"><li class="item-li">Servicios</li></a>
          <a href="./contact.html" class="item-a"><li class="item-li">Contacto</li></a>
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