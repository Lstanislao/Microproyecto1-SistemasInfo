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
    "html":5,
    "css":20,
    "js":10
  }
  let orden =[];  
  
  for (var clave in skills) {
    console.log(skills[clave]+" ITERACION");
    console.log(skills[clave]>orden[0]);

    if(orden.length===0){
      console.log("primero");
      orden.push([clave,skills[clave],"primero"]);
      console.log(orden[0]+"aux");

    }else if(skills[clave]>orden[0][2])
    {
      orden.push(orden[0]);
      console.log("segundo");
      orden[1][2]="segundo";
      orden[0]=[clave,skills[clave],"primero"];
    }else if  (skills[clave]>orden[0][2]){
      console.log("tercero");
       orden.push(orden[1]);
      orden[2][2]="tercero";
      orden[1]=[clave,skills[clave],"segundo"];
    }else{
      console.log("cuarto");
      orden.push[clave,skills[clave],"tercero"];
    }
console.log(orden);

    
    
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

 

