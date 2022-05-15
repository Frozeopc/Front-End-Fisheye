  function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = fetch("data/photographers.json")
            .then(reponse=>reponse.json())
            .then(response=>response.photographers)
        ;
        // et bien retourner le tableau photographers seulement une fois
        console.log(photographers);
        return photographers;
    }

     function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    //remplacer les async await & then