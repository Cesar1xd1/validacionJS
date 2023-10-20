
function validarFormulario(){
    let validacion = true;
    
   
   
    
    let nombre = document.getElementById("nombre").value;
    let pa = document.getElementById("primer_ap").value;
    let sa = document.getElementById("segundo_ap").value;
    let edad = document.getElementById("edad").value;
    let sem = document.getElementById("semestre").value;
    nombre = nombre.trim();


    if(nombre == "" ){
        let texto = document.getElementById("nom-msj");
        texto.innerHTML = "nombre vacio";
        texto.style.color = "red";
        validacion = false;
    }else if(pa == "" ){
      let texto = document.getElementById("nom-msj");
      texto.innerHTML = "Primer apellido vacio";
      texto.style.color = "red";
      validacion = false;
  }else if(sa == "" ){
    let texto = document.getElementById("nom-msj");
    texto.innerHTML = "Segundo apellido vacio";
    texto.style.color = "red";
    validacion = false;
}else if(edad == "" ){
  let texto = document.getElementById("nom-msj");
  texto.innerHTML = "edad vacio";
  texto.style.color = "red";
  validacion = false;
}else if(sem == "" ){
  let texto = document.getElementById("nom-msj");
  texto.innerHTML = "Semestre vacio";
  texto.style.color = "red";
  validacion = false;
}


    return validacion;
}

function solonumeros(evt){
                
                
    var c = (evt.which) ? evt.which : evt.keyCode;
    
    if(c==8) { 
      return true;
    } else if(c>=48 && c<=57) {
      return true;
    } else {
      return false;
    }
}

function sololetras(evt){
                
                
  var c = (evt.which) ? evt.which : evt.keyCode;
  
  if(c==8) { 
    return true;
  } else if(c>=65 && c<=90) {
    return true;
  }else if(c>=97 && c<=122){
    return true;
  }else if(c==32){
    return true;
  }else if(c>=160 &&  c<=165 || c==130){
    return true;
  }else {
    return false;
  }
}
