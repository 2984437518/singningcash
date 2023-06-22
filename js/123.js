var di=document.getElementById("v1");
var fa=document.getElementById("v2");
var wo=document.getElementById("v3");
var c=document.getElementById("c");
var a=document.getElementById("a");
var d=document.getElementById("d");
di.onclick=function (){
   fa.style.color="#808080";
   wo.style.color="#808080";
   di.style.color="white";
  if(di.style.color="white"){
   c.style.display= "block";
  }else{
   c.style.display= "none";
  }
}
fa.onclick=function (){
   fa.style.color="white";
   wo.style.color="#808080";
   di.style.color="#808080";
   c.style.display="none";
   d.style.display="none";
  if(fa.style.color="#white"){
   a.style.display= "block";
  }else{
   a.style.display= "none";
  }
}
wo.onclick=function (){
   wo.style.color="white";
   di.style.color="#808080";
   fa.style.color="#808080";
   c.style.display="none";
  if(wo.style.color="white"){
   d.style.display= "block";
  }else{
   d.style.display= "none";
  }
}