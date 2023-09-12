export interface Figure {
  obtenerArea(): number
}

export class Square implements Figure { // clase Cuadrado implementa interfaz figure
  constructor (private side: number) {} //el constructor recibe parámetro "lado" del cuadrado será de tipo number

  obtenerArea () { //implementa el método obtener de la interfaz figura
    return this.side ** 2 // retorna la propiedad "lado" elevada al cuadrado 
  }
}

export class Circle implements Figure {
  constructor (private radius: number) {}

  obtenerArea () {
    return Math.PI * (this.radius ** 2) // PI por radio^2
  }
}

export class Triangle implements Figure {
  constructor (public base: number, public height: number) {}

  obtenerArea (): number {
    return (this.height * this.base) / 2  //base * altura / 2
  }
}
