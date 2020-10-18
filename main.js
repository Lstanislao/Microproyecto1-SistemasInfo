var carruselIndex = 0;
carousel();
graficar();

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

function graficar() {
  let skills={
    "html":30,
    "css":20,
    "js":10
  } 
  

  const $grafico = document.createElement("div"),
  $html = document.createElement("div"),
  $css = document.createElement("div"),
  $js = document.createElement("div"),
  $python = document.createElement("div"),
  $pyText = document.createTextNode("PYTHON"),
  $jsText = document.createTextNode("JS"),
  $htmlText = document.createTextNode("HTML"),
  $cssText = document.createTextNode("CSS"),
  $box=document.querySelector(".box-right");

console.log($box);
$grafico.appendChild($html);
$grafico.appendChild($css);
$grafico.appendChild($js);
$grafico.appendChild($python);
$python.appendChild($pyText);
$js.appendChild($jsText);
$html.appendChild($htmlText);
$css.appendChild($cssText);
$grafico.classList.add("grafico");



$html.classList.add("segundo");
$css.classList.add("tercero");
$js.classList.add("cuarto");
$python.classList.add("primero")


$box.appendChild($grafico);
  
}

 

