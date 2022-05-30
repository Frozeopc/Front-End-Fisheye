const lightBox = document.querySelector('.lightBox');

function openLightBox(media) {
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

function closeLightBox() {
  lightBox.style.display = "none";
  let lightBoxImage = document.querySelectorAll('.lightBox-image');
  lightBoxImage.forEach(media => {
    if (media.classList.contains('show')) {
      media.classList.remove('show');
    }
  })
}

function goToLeft() {
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

function goToRight() {
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