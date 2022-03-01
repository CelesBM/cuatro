function contactContent(contact){

    const contactDiv = document.createElement("div");

    contactDiv.innerHTML = `
    <section class="contact__section">
        <h2 class="contact__title">Escribime</h2>
        <form class="form">
            <label>
                <span class="span-name">Nombre</span>
                <input type="text" class="input-name" />
            </label>
            <label>
                <span class="span-email">Email</span>
                <input type="email" class="input-email" />
            </label>
            <label>
                <span class="span-message">Mensaje</span>
                <textarea id="input-message" name="input-message" class="input-message"></textarea>
            </label>
            <div class="form__submit-container">
                <button class="form__submit-button">Enviar</button>
            </div>
        </form>
    </section>
    `;

    contact.appendChild(contactDiv);
}
