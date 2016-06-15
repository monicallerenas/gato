var con=1;
var b1="b1",b2="b2",b3="b3",b4="b4",b5="b5",b6="b6",b7="b7",b8="b8",b9="b9";
function actions(boton){
 if(boton.className=="buttons"){
//  boton al darle click
  boton.className="clicked";
  var text;
  if(con%2==0){
   text="X";
  }else{
   text="O";
  }
  boton.value=text;
  boton.appendChild(document.createTextNode(text));
  con++;
  asignacion(text,boton);
 }else{
 }
}
function asignacion(text,boton){
 if(b1==boton.name){
  b1=text;
 }
 else if(b2==boton.name){
  b2=text;
 }
 else if(b3==boton.name){
  b3=text;
 }
 else if(b4==boton.name){
  b4=text;
 }
 else if(b5==boton.name){
  b5=text;
 }
 else if(b6==boton.name){
  b6=text;
 }
 else if(b7==boton.name){
  b7=text;
 }
 else if(b8==boton.name){
  b8=text;
 }
 else if(b9==boton.name){
  b9=text;
 }
 
 validacion(text);

 if(acabo()) {
  alert('Perdiste, quieres volver a intentarlo?');
  window.location.reload();
 }

}
//validando respuestas
function validacion(text){
 if((b1==b2 && b2==b3)||(b1==b5 && b5==b9)||(b3==b5 && b5==b7)||(b4==b5 && b5==b6)||(b7==b8 && b8==b9)||(b1==b4 && b4==b7)||(b2==b5 && b5==b8)||(b3==b6 && b6==b9)){
  var con=confirm(text +" ganaste, quieres iniciar otra partida?");
  if(con==true){
   window.location.reload();
  }
 }
}

function acabo() {
  if (b1.indexOf('b') == -1 &&
    b2.indexOf('b') == -1 &&
    b3.indexOf('b') == -1 &&
    b4.indexOf('b') == -1 &&
    b5.indexOf('b') == -1 &&
    b6.indexOf('b') == -1 &&
    b7.indexOf('b') == -1 &&
    b8.indexOf('b') == -1 &&
    b9.indexOf('b') == -1 ){
    return true;
  }

  return false;
}