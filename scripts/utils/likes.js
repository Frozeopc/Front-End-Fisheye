
// function like/unlike en fonction du clic de l'utilisateur
function likeUnlike(link, event) {
  if ((event && event.keyCode === 13) || !event) {
    var elementNbLike = link.previousElementSibling;
    var nbLike = parseInt(elementNbLike.textContent);
    var buttonIconHeart = link.querySelector('.heart');
    var buttonIconHeartFull = link.querySelector('.heartFull');
    var totalLikeElement = document.querySelector('.total-like');
    var totalLike = parseInt(totalLikeElement.innerHTML);

    // si unlike devient like = +1 et total like +1
    if (link.classList.contains('unliked')) {
      nbLike++;
      totalLike++;
      link.classList.remove('unliked');
      link.classList.add('liked');
      buttonIconHeart.setAttribute('style', 'display:none;');
      buttonIconHeartFull.setAttribute('style', 'display:inline;');

      // si like devient unlike = -1 et total like -1
    } else {
      nbLike--;
      totalLike--;
      link.classList.remove('liked');
      link.classList.add('unliked');
      buttonIconHeartFull.setAttribute('style', 'display:none;');
      buttonIconHeart.setAttribute('style', 'display:inline;');

    }
    elementNbLike.innerHTML = nbLike;
    totalLikeElement.innerHTML = totalLike;
    console.log(nbLike);
  }
}
