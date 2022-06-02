function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const picture = `assets/photographers/${photographerId}/${image}`;
    const film = `assets/photographers/${photographerId}/${video}`;
    function getMediaCardDOM() {
        var html = `<article>`;
        if (image) {
            html += `<img class='media-image' src="${picture}" onclick="openLightBox(this)"/>`;
        } else {
            html += `<video class='media-image' controls><source src="${film}"></video>`;
        }
        html += `<h3>${title}</h3>
                <p class="nbLike">${likes}</p>
                <span class="like-unlike unliked" onclick="likeUnlike(this)">
                    <i class="fa-regular fa-heart heart"></i>
                    <i class="fa-solid fa-heart heartFull"></i>
                </span>
            </article>`;
        return (html);
    }
    function getMediaLightBox() {
        var html = `<div class='lightBox-image'>`;
        if (image) {
            html += `<img class='media-lightBox' src="${picture}"/>`;
        } else {
            html += `<video class='media-lightBox' controls><source src="${film}"></video>`;
        }
        html += `<h3>${title}</h3>
        </div>`;
        return (html);

    }

    return { getMediaCardDOM, getMediaLightBox }
}