var contenido, lienzo;
var x_1,
    x_f,
    y_1,
    y_f;
contenido = document.getElementById('espacio');
lienzo= contenido.getContext('2d');

function lineas(color, x1, y1, xf, yf) {
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.moveTo(x1 , y1);
  lienzo.lineTo(xf , yf);
  lienzo.stroke();
  lienzo.closePath();
}
lineas("red", 1, 1, 1, 299);
lineas("red", 1, 299, 299, 299);
lineas("red", 299, 299, 299, 1);
lineas("red", 299, 1, 1, 1);

for (var i = 0; i < 30; i++) {

  yv1=10*i;
  xvf=10*(i+1);
  lineas("green", 0, yv1, xvf, 300);

}
for (var i = 0; i < 30; i++) {

  yv1=10*i;
  xvf=10*(i+1);
  lineas("blue", yv1, 0, 300,xvf);

}
lineas("gray",0,0,300,300);
