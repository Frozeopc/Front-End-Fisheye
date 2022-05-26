function likeUnlike(link) {
  var elementNbLike = link.previousElementSibling;
  var nbLike = parseInt(elementNbLike.textContent);
  var buttonIconHeart = link.querySelector('.heart');
  var buttonIconHeartFull = link.querySelector('.heartFull');
  var totalLikeElement = document.querySelector('.total-like');
  var totalLike = parseInt(totalLikeElement.innerHTML);

  if (link.classList.contains('unliked')) {
    nbLike++;
    totalLike++;
    link.classList.remove('unliked');
    link.classList.add('liked');
    buttonIconHeart.setAttribute('style', 'display:none;');
    buttonIconHeartFull.setAttribute('style', 'display:inline;');

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

