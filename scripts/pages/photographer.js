//Mettre le code JavaScript lié à la page photographer.html
const urlParam = new URLSearchParams(window.location.search);
const idPhotographer = urlParam.get('id');
console.log(idPhotographer);

async function getMediasByPhotographer(idPhotographer) {
    
    const response = await fetch("data/photographers.json");
        var data = await response.json();
        var medias = data.media;
        var listMedias = medias.filter(d => d.photographerId === parseInt(idPhotographer));
    console.log(listMedias);
    return listMedias;
}
async function getPhotographerById(idPhotographer) {
    const response = await fetch("data/photographers.json");
    var data = await response.json();
    var listPhotographers = data.photographers;
    var photographer = listPhotographers.filter(d => d.id === parseInt(idPhotographer));
    console.log(photographer);
    return photographer[0];
}




 function displayData(photographer,medias) {

    const photographerSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    console.log(photographerModel);
    const photographerCardDOM = photographerModel.getUserHeaderCardDOM();
    console.log(photographerCardDOM);
    photographerSection.innerHTML+=(photographerCardDOM);


    const mediasSection = document.querySelector(".medias_section");
    
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
    });
}
async function init(idPhotographer) {
    // Récupère les datas des photographes
    const photographer = await getPhotographerById(idPhotographer);
    const medias = await getMediasByPhotographer(idPhotographer);
    console.log(medias);
    displayData(photographer,medias);
};

init(idPhotographer);