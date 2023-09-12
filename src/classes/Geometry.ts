import { Circle, Figure, Square, Triangle } from '../interfaces/Figures'

export class Geometry {
  constructor (private figure: Figure) {}

  area () {
    return this.figure.obtenerArea()
  }
}

const cuadrado = new Geometry(new Square(10))
const triángulo = new Geometry(new Triangle(10, 20))
const circulo = new Geometry(new Circle(10))

console.log('área del cuadrado', cuadrado.area())
console.log('área del triángulo', triángulo.area())
console.log('área del círculo ', circulo.area())
