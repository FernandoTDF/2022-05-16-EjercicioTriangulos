
  function calcularAreaTriangulo (base:number, altura:number):number {
    return (base*altura)/2;
    };

function calculandoTriangulos () {

  let resultado:number=calcularAreaTriangulo(1 , 2);
  console.log("El area es = ", resultado);
  resultado=calcularAreaTriangulo( 2, 4);
  console.log("El area es = ", resultado);
  resultado=calcularAreaTriangulo( 3, 6);
  console.log("El area es = ", resultado);
  resultado=calcularAreaTriangulo( 4, 8);
  console.log("El area es = ", resultado);
  resultado=calcularAreaTriangulo( 5, 10);
  console.log("El area es = ", resultado);
  resultado=calcularAreaTriangulo( 6, 12);
  console.log("El area es = ", resultado);
  resultado=calcularAreaTriangulo( 7, 14);
  console.log("El area es = ", resultado);
  }

let i:number;
for (i = 1; i <= 100; i++) {
console.log("El area para (" + i +";" +(i*2) + ")es = ", calcularAreaTriangulo (i, i*2));
}