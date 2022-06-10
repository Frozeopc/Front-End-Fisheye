const lightBox = document.querySelector('.lightBox');

// fonction ouverture de la lightbox 
function openLightBox(media, event) {
  if ((event && event.keyCode === 13) || !event) {
    lightBox.style.display = "block";
    var src = media.getAttribute('src');
    console.log("src media cliqué : " + src);
    let lightBoxContent = document.querySelectorAll('.media-lightBox')
    lightBoxContent.forEach(mediaLightBox => {
      let srcMediaLightBox = mediaLightBox.getAttribute('src');
      console.log("src medias : " + srcMediaLightBox);
      if (srcMediaLightBox == src) {
        let parentMediaLightBox = mediaLightBox.parentElement;
        console.log("parent : " + parentMediaLightBox);
        parentMediaLightBox.classList.add('show');
      }
    })
  }
}

// fonction fermeutre de la lighbox
function closeLightBox(event) {
  if ((event && (event.keyCode === 13 || event.keyCode === 27)) || !event) {
    lightBox.style.display = "none";
    let lightBoxImage = document.querySelectorAll('.lightBox-image');
    lightBoxImage.forEach(media => {
      if (media.classList.contains('show')) {
        media.classList.remove('show');
      }
    })
  }
}

// défilement a gauche des médias
function goToLeft(event) {
  if ((event && (event.keyCode === 37 || event.keyCode === 13)) || !event) {
    let lightBoxImage = document.querySelectorAll('.lightBox-image');
    let length = lightBoxImage.length;
    let currentIndex = 0;
    let indexPrev = 0;
    lightBoxImage.forEach((media, index) => {
      if (media.classList.contains('show')) {
        media.classList.remove('show');
        currentIndex = index;

      }
    })
    if (currentIndex === 0) {
      indexPrev = length - 1;

    } else {
      indexPrev = currentIndex - 1;

    }
    lightBoxImage[indexPrev].classList.add('show')
  }
}

// défilement a droite des médias
function goToRight(event) {
  if ((event && (event.keyCode === 39 || event.keyCode === 13)) || !event) {
    let lightBoxImage = document.querySelectorAll('.lightBox-image');
    let length = lightBoxImage.length;
    let currentIndex = 0;
    let indexNext = 0;
    lightBoxImage.forEach((media, index) => {
      if (media.classList.contains('show')) {
        media.classList.remove('show');
        currentIndex = index;

      }
    })
    if (currentIndex === (length - 1)) {
      indexNext = 0;

    } else {
      indexNext = currentIndex + 1;

    }
    lightBoxImage[indexNext].classList.add('show')
  }
}

// utilisation des flèches pour la navigation de lightbox et boutton echap
document.addEventListener('keydown', function (event) {

  if (event.key == "ArrowLeft") {
    goToLeft(event)
  }
  if (event.key == "ArrowRight") {
    goToRight(event)
  }
  if (event.key == "Escape") {
    closeLightBox(event)
  }
})