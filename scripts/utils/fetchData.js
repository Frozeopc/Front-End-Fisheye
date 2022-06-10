// récupération de tous les photographes
async function getPhotographers() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    var photographers = data.photographers;

    return photographers;
}

// récupération des médias en fonction de l'ID du photographes et tri en fonction du selecteur
async function getMediasByPhotographer(idPhotographer, sortBy) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();

    var medias = data.media;
    var listMedias = medias.filter(d => d.photographerId === parseInt(idPhotographer));
    var listMediasSort = getSortBy(sortBy, listMedias);

    console.log(listMedias);
    return listMediasSort;
}

// récupération d'un photgraphe en fonction de l'ID
async function getPhotographerById(idPhotographer) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    var listPhotographers = data.photographers;
    var photographer = listPhotographers.filter(d => d.id === parseInt(idPhotographer));
    console.log(photographer);
    return photographer[0];
}




