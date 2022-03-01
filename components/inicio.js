// NO ENTIENDO NADA! VER



function getDesafio(){
    
    return fetch("https://cdn.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=tHLOhPQdV9e9m5erEByoksWU_yGaj0eYQNOHzBR0vvc&content_type=desafio")
    .then(res =>{
      return res.json()
    }).then((data)=>{
      const fieldsCollections = data.items.map((item)=>{
        return{
          contentful: item.fields.contentful
  
        }
    })
      return fieldsCollections
    })
  
  }
  
  function addDesafio( params = {}){
  
     const container = document.querySelector(".section-1__titulo-1").textContent =
     params.contentful;
  
    
     
  }
  
  
  
  
  
  function getPresentation(){
      
    return fetch("https://cdn.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=tHLOhPQdV9e9m5erEByoksWU_yGaj0eYQNOHzBR0vvc&content_type=presentation")
    .then(res =>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      const fieldsCollections = data.items.map((item)=>{
        return{
          presentacion: item.fields.presentacion,
          descripcion: item.fields.descripcion,
        }
    })
      return fieldsCollections
    })
  
  }
  
  function addPresentacion( params = {}){
  
     const container = document.querySelector(".section-2__titulo").textContent =
     params.presentacion;
     const containerl = document.querySelector(".section-2__parrafo").textContent =
     params.descripcion;
  
    
     
  }



  function getServicios(){
    
    return fetch("https://cdn.contentful.com/spaces/96le97k9rsgn/environments/master/entries?access_token=tHLOhPQdV9e9m5erEByoksWU_yGaj0eYQNOHzBR0vvc&content_type=servicios")
    .then(res =>{
      return res.json()
    }).then((data)=>{
      const fieldsCollections = data.items.map((item)=>{
 
        const imgId = item.fields.imagen.sys.id
        const imagen = searchImagen(imgId, data);
        const linkImg = imagen.fields.file.url;
 
        return{
          titulo: item.fields.titulo,
          imagen: linkImg,
          trabajos: item.fields.trabajos,
          descripcion: item.fields.descripcion,
          url: item.fields.url
          
        }
    })
      return fieldsCollections
    })
  
  }
 
 
 
 
 function addServicios(params = {}){
    const template = document.querySelector("#servicios__section-template");
 
    const container = document.querySelector(".servicios__section");
 
    template.content.querySelector(".servicios__section-titulo").textContent = params.titulo;
 
    template.content.querySelector(".servicios__section-content-img").src = "http:" + params.imagen;
 
    template.content.querySelector(".servicios__section-content-liti").textContent = params.trabajos;
    
    template.content.querySelector(".servicios__section-content-p").textContent = params.descripcion;
 
    template.content.querySelector(".servicios__section-content-link").href =  params.url;
 
    
    const clone = document.importNode(template.content, true,)
    container.appendChild(clone);
 
 }
 
 
 function searchImagen(id, datos) {
  const imagen = datos.includes.Asset.find((asset) => {
      return asset.sys.id == id;
  });
  return imagen;
 }

  


  function main(){
  
  


  getDesafio().then((res) => {
    for (const w of res) {
     addDesafio(w);
    }
  });
  getPresentation().then((res) => {
    for (const w of res) {
     addPresentacion(w);
    }
  });
  
 
  getServicios().then((res) => {
    for (const w of res) {
     addServicios(w);
    }
  });

  }
  main();




