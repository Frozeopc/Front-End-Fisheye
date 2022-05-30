// export default class Lightbox {
//   constructor(medias, currentMedia) {
//     this.element = document.getElementById('lightbox');
//     this.content = document.getElementById('lightbox-content');
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.close = this.close.bind(this);
//     this.medias = medias;
//     this.currentMedia = currentMedia;
//     this.createMedias();
//     this.element.classList.add('open');
//     this.registerEvents();
//   }

//   createMedias() {
//     this.content.innerHTML = '';

//     this.medias.forEach((media) => {
//       let mediaDom;
//       const videoSrc = document.createElement('source');

//       if (Object.prototype.hasOwnProperty.call(media, 'image')) {
//         mediaDom = document.createElement('img');

//       } else {
//         mediaDom = document.createElement('video');

//       }

//       if (parseInt(media.id, 10) === parseInt(this.currentMedia, 10)) {
//         mediaDom.classList.add('active');
//       }

//       this.content.appendChild(mediaDom);
//     });
//   }
// } 
const lightBox = document.querySelector('.lightBox');
const lightBoxContent = document.querySelectorAll('.lightBox-image .media-lightBox')
console.log(lightBoxContent);
function openLightBox(media) {
  lightBox.style.display = "block";
  var src = media.getAttribute('src');
  console.log("src media cliqué : " + src);
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
}

function goToLeft() {

}

function goToRight() {

}