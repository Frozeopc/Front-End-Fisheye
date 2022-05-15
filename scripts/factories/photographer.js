function photographerFactory(data) {
    const { name, portrait, price, city, country, id, tagline  } = data;
    const picture = `assets/photographers/Photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement('a');
        link.setAttribute('href', 'photographer.html?id='+id);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        const citycountry = document.createElement('p');
        const hookline = document.createElement('p');
        const prize = document.createElement('p');
        h2.textContent = name;
        citycountry.textContent = city + ", " + country;
        hookline.textContent = tagline;
        prize.textContent = price + "€/jour";
        citycountry.classList.add('location');
        hookline.classList.add("tagline");
        prize.classList.add("price");
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(citycountry);
        article.appendChild(hookline);
        article.appendChild(prize);
        return (article);
    }
    function getUserHeaderCardDOM(){
        const html = `<article>
                <img class="photographer-image" src="${picture}">
                <h2>${name}</h2>
                <p class="location">${city}</p>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}/jour</p>
             </article>
        `;
            
        return (html);

    }
    return { name, picture, getUserCardDOM, getUserHeaderCardDOM }
}


// creation constante pour chaque attribut photographe
// insertion des différentes données dans le html