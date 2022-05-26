//Mettre le code JavaScript lié à la page photographer.html
const urlParam = new URLSearchParams(window.location.search);
const idPhotographer = urlParam.get('id');
const selector = document.getElementById('sort');


selector.addEventListener('change', async function () {
    const medias = await getMediasByPhotographer(idPhotographer, this.value)
    displayDataMedias(medias)
})

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





//affiche des médias
function displayDataMedias(medias) {
    const mediasSection = document.querySelector(".medias_section");
    const likeSection = document.querySelector(".total-like");
    var html = '';
    var totalLike = 0;
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();

        html += mediaCardDOM;
        totalLike += media.likes;
    });

    mediasSection.innerHTML = html;
    likeSection.innerHTML = totalLike;

}

//affichage header photographer
function displayDataPhotographer(photographer) {

    const photographerSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    console.log(photographerModel);
    const photographerCardDOM = photographerModel.getUserHeaderCardDOM();
    console.log(photographerCardDOM);
    photographerSection.innerHTML += (photographerCardDOM);



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