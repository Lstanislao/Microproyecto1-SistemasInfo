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
    "html":45,
    "css":30,
    "js":20,
    "python":75
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

    $grafico.appendChild($html);
    $grafico.appendChild($css);
    $grafico.appendChild($js);
    $grafico.appendChild($python);
    $python.appendChild($pyText);
    $js.appendChild($jsText);
    $html.appendChild($htmlText);
    $css.appendChild($cssText);


 for (let clave in skills) { 
   let clase;
   console.log(skills[clave]);
    if(skills[clave]<=25)
    { 
     
    clase="cuarto";
    }else if (skills[clave]<=35) {
    
      clase="tercero"; 
    }else if (skills[clave]<=50) {
      
      clase="segundo"
    }else if (skills[clave]<=100) {
      clase="primero";
    }else{
      clase="ultimo";
    }
    

    if (clave=="html"){
       
      $html.classList.add(clase);
    }else if (clave=="css") {
        
      $css.classList.add(clase);
    }else if (clave=="js"){
    
      $js.classList.add(clase);
    }else if( clave=="python"){
      

      
      $python.classList.add(clase)

    }
  }

$grafico.classList.add("grafico");
$box.appendChild($grafico);
  
}



const mensaje = () => {
  let name = document.getElementById('nombre').value;
  let correo =document.getElementById('correo').value;
  let msg =document.getElementById('msg').value;
		alert("Hola muy buenas tardes  gracias por contactarme!\n"+"Su nombre es: "+name+ "\n" +"Su correo es: "+ correo + "\n"+ "El mensaje enviado es: "+ msg );
};

const enviar = document.getElementById('enviar');
enviar.addEventListener('click', mensaje);


 

