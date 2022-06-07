function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const picture = `assets/photographers/${photographerId}/${image}`;
    const film = `assets/photographers/${photographerId}/${video}`;
    function getMediaCardDOM() {
        var html = `<article>`;
        if (image) {
            html += `<img class='media-image' src="${picture}" tabindex="0" onclick="openLightBox(this)" onkeypress="openLightBox(this,event)"/>`;
        } else {
            html += `<video class='media-image' controls="hidden"><source src="${film}" onclick="openLightBox(this)"></video>`;
        }
        html += `<div class="infos-media">
                    <h3>${title}</h3>
                    <div>
                        <p class="nbLike">${likes}</p>
                        <span class="like-unlike unliked" onclick="likeUnlike(this)" onkeypress="likeUnlike(this,event)" tabindex="0">
                            <i class="fa-regular fa-heart heart"></i>
                            <i class="fa-solid fa-heart heartFull"></i>
                        </span>
                    </div>
                </div>
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