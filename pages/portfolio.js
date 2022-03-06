function getPortfolio(){
    
    return fetch("https://cdn.contentful.com/spaces/t2y6laxvfxhu/environments/master/entries?access_token=zyzWwSi6tvYPpdaDBaL0iAseAAgHR77HnJuahsdoPeg&content_type=portfolio")

    .then(res =>{
      return res.json()
    })
    
    .then((data)=>{
      const fieldsCollections = data.items.map((item)=> {
        const imgId = item.fields.image.sys.id
        const imagen = searchImagen(imgId, data);
        const linkImg = imagen.fields.file.url;

        return{
          portfolio: item.fields.portfolio,
          imagen: linkImg,
          description: item.fields.description,
          url: item.fields.url 
        }
    })
      return fieldsCollections
    })
  }

function addPortfolio(params = {}){

    const template = document.querySelector("#portfolio__template");
    const section = document.querySelector(".portfolio");

    template.content.querySelector(".portfolio__content-image").src = "https:" + params.imagen;
    template.content.querySelector(".portfolio__content-title").textContent = params.title;
    template.content.querySelector(".portfolio__content-description").textContent = params.description;
    template.content.querySelector(".portfolio__content-link").href = params.url;

    const clone = document.importNode(template.content, true,);

    section.appendChild(clone);
}

function searchImagen(id, datos) {

  const imagen = datos.includes.Asset.find((asset) => {return asset.sys.id == id;});

  return imagen;
}

function main () {

    const headerEl = document.querySelector(".header");
    headerContent(headerEl);

    const footerEl = document.querySelector(".footer");
    footerContent(footerEl);
    
    getPortfolio().then((res) => {
      for (const w of res) {addPortfolio(w);}
    });
}

main();