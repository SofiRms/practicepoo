import { Book } from "../interfaces/Libros";

export class Biblioteca {
    private lista: Array<Book> = []; // para guardar los libros de la clase Book

    generarId () {
        const ids = this.lista.map(e => e.getBook().id)//el id es privado, se debe acceder al método
        if (!ids.length) {
          ids.push(0)
        }
        return Math.max(...ids) + 1
      }

    addBook (book: Book) { // "Book" es el tipo de clase de que se importa
        book.setId(this.generarId()) // el método generar id se pasa como parámetro al método Set)
        return this.lista.push(book) //se agrega el libro a la lista
    }

    getAll () : Array<Book> {
        return this.lista
    }
    getDisponibles() : Array<Book> {
        return this.lista.filter(Book => Book.getDisponibles()) //método de libros disponbiles, de la clase
    }
    getNoDisponibles() : Array<Book> {
        return this.lista.filter(Book => !Book.getDisponibles()) 
    }

    setDisponibles(id:number) : string {
        return this.lista
        .filter(Book => Book.getBook().id === id)[0] //se trae el libro que coincide con el id, se cambia la disponibilidad
        .setTaken() 
    }
}