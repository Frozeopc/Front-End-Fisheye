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