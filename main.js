var carruselIndex = 0;
carousel();

function carousel() {

  var index;
  var imagenes = document.getElementsByClassName("carrusel-image");
  for (index = 0; index < imagenes.length; index++) {
    imagenes[index].style.display = "none";
  }
  carruselIndex++;
  if (carruselIndex > imagenes.length) {carruselIndex= 1}
  imagenes[carruselIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}