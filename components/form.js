function formEvent(){

  const formEl = document.querySelector(".contact");

  formEl.addEventListener("submit", function(ev) {
  ev.preventDefault();
  
  const formData = new FormData(ev.target);
  const obj = Object.fromEntries(formData.entries());

  const mensaje = `
    user: ${obj.name}
    email: ${obj.email}
    mensaje: ${obj.message}
  `;
  
  fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
      to: "celesbmontero@hotmail.com",
      message: mensaje,
        })
    })

  .then(()=> {
      alert("Hemos recibido tu mensaje con éxito! nos estaremos comunicando a la brevedad.");
  });
  });
  };

  const contactEl = document.querySelector(".contact");
  viewContact(contactEl);
  formPost();