 
  function addService(params = {}) {

    const template = document.querySelector("#services__template");
    const services = document.querySelector(".services");
  
    template.content.querySelector(".service__title").textContent =
      params.title;
  
    template.content.querySelector(".service__text").textContent =
      params.description;
  
    template.content.querySelector(".service__image").src =
      "http:" + params.image;
  
    template.content.querySelector(".service__link").href = params.url;
  
    const clone = document.importNode(template.content, true);
    services.appendChild(clone);
  }
 

 function getServices() {

  return fetch("https://cdn.contentful.com/spaces/t2y6laxvfxhu/environments/master/entries?access_token=zyzWwSi6tvYPpdaDBaL0iAseAAgHR77HnJuahsdoPeg&content_type=services")
    .then((res) => {
      return res.json();})

    .then((data) => {
      const fieldsCollections = data.items.map((i) => {
        const imgId = i.fields.image.sys.id;
        const img = getImages(imgId, data);
        
        return {
          title: i.fields.title,
          description: i.fields.description,
          image: img.fields.file.url,
        };
      });
      
      return fieldsCollections;
    });
}


  function getImages(id, json) {
    return json.includes.Asset.find((i) => {
      return i.sys.id == id;
    });
  }

  
  function main() {
    
    getServices().then(function (ser) {
    for (const s of ser) {addService(s);} 
});
}

main();