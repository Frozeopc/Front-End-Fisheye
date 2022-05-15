function mediaFactory(data) {
    const {id, photographerId, title, image, likes, date, price} = data;
    const  picture = `assets/photographers/${photographerId}/${image}`;
    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        const favor = document.createElement( 'p' )
        h2.textContent = title;
        favor.textContent = likes;
        
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(favor);
        
        return (article);
    }
    return { getMediaCardDOM }
}