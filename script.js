function generatColor() {
  var randomColor=Math.floor(Math.random()*16777215).toString(16);
  var randomColor="#"+randomColor;
  document.getElementById("main").style.backgroundColor=randomColor;
  document.getElementById("hexVal").innerHTML=randomColor;
}