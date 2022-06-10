
const urlParam = new URLSearchParams(window.location.search);
const idPhotographer = urlParam.get('id');
const selector = document.getElementById('sort');

// trie des photos
selector.addEventListener('change', async function () {
    const medias = await getMediasByPhotographer(idPhotographer, this.value)
    displayDataMedias(medias)
})

// trie des données en fonction du selecteur
function getSortBy(sortBy, datas) {
    switch (sortBy) {
        case 'date':
            const sortByDate = datas.sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1);
            return sortByDate;
            break;
        case 'likes':
            const sortByLikes = datas.sort((a, b) => a.likes < b.likes ? 1 : -1)
            return sortByLikes
            break;
        case 'title':
            const sortByTitle = datas.sort((a, b) => a.title < b.title ? -1 : 1)
            return sortByTitle
            break;
    }
}





//affiche des médias et création de la lightbox
function displayDataMedias(medias) {
    const mediasSection = document.querySelector(".medias_section");
    const LigthBoxContentSection = document.querySelector(".lightBox .content .content-media");
    const likeSection = document.querySelector(".total-like");
    var totalLike = 0;

    var html = '';
    var htmlLightBox = '';
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();

        html += mediaCardDOM;
        totalLike += media.likes;

        const lightBoxContent = mediaModel.getMediaLightBox();
        htmlLightBox += lightBoxContent;
    });

    mediasSection.innerHTML = html;
    likeSection.innerHTML = totalLike;
    LigthBoxContentSection.innerHTML = htmlLightBox;

}

//affichage header photographer
function displayDataPhotographer(photographer) {

    const photographerSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const priceSection = document.querySelector(".price-photographer")
    const photographerCardDOM = photographerModel.getUserHeaderCardDOM();
    photographerSection.innerHTML += (photographerCardDOM);
    priceSection.innerHTML = photographer.price + "€/jour";



}
async function init(idPhotographer) {
    // Récupère les datas des photographes
    const photographer = await getPhotographerById(idPhotographer);
    const medias = await getMediasByPhotographer(idPhotographer, 'likes');
    console.log(medias);
    displayDataMedias(medias);
    displayDataPhotographer(photographer);
};

init(idPhotographer);