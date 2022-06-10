// objet média

function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const picture = `assets/photographers/${photographerId}/${image}`;
    const film = `assets/photographers/${photographerId}/${video}`;

    // création html d'un média pour la page photographer 
    function getMediaCardDOM() {
        var html = `<article>`;
        if (image) {
            html += `<img class='media-image' alt="${title}"  src="${picture}" tabindex="0" onclick="openLightBox(this)" onkeypress="openLightBox(this,event)"/>`;
        } else {
            html += `<video class='media-image' alt="${title}" controls="hidden"><source src="${film}" onclick="openLightBox(this)"></video>`;
        }
        html += `<div class="infos-media">
                    <h3>${title}</h3>
                    <div>
                        <p class="nbLike">${likes}</p>
                        <span class="like-unlike unliked" onclick="likeUnlike(this)" onkeypress="likeUnlike(this,event)" tabindex="0" alt="aimer la photo">
                            <i class="fa-regular fa-heart heart"></i>
                            <i class="fa-solid fa-heart heartFull"></i>
                        </span>
                    </div>
                </div>
            </article>`;
        return (html);
    }

    // création d'un média html pour la lightbox
    function getMediaLightBox() {
        var html = `<div class='lightBox-image'>`;
        if (image) {
            html += `<img class='media-lightBox' alt="${title}" src="${picture}"/>`;
        } else {
            html += `<video class='media-lightBox' alt="${title}" controls><source src="${film}"></video>`;
        }
        html += `<h3>${title}</h3>
        </div>`;
        return (html);

    }

    return { getMediaCardDOM, getMediaLightBox }
}