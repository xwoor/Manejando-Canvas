var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var campo = document.getElementById("espacio");
var lienzo = campo.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("black", x-1, y-1, x+1, y+1, lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var color = "black";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, lienzo);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, lienzo);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y, lienzo);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y, lienzo);
      x = x + movimiento;
    break;
  }
}