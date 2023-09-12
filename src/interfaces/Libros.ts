interface Libros {
    id: number,
    title: string,
    author: string,
    taken: boolean | string
}

export class Book {
    private id: number = 0;
    private title: string = "";
    private author: string = "";
    private taken: string | boolean = "";
    private idEdited: boolean = false;

    constructor(
        {title, author, taken} : 
        {title: string, author: string, taken: string}
    ){
        this.title = title;
        this.author = author;
        this.taken = taken.toLocaleLowerCase()=== "disponible"; //los libros están disponibles por defecto
    }

    getBook(): Libros { //el tipo debe coincidir con la interface, para que el método cumpla con la interface
        return{
            id: this.id,
            title: this.title,
            author: this.author,
            taken: this.taken
        }
    }

    setTaken(): string { //devuelve un string para setear la disponibilidad del libro
        this.taken = !this.taken;
        return this.taken ? "disponible" : "prestado" //si está disponible se setea a prestado
    }
    getDisponibles () {
        return this.taken
    } 

    setId (id: number) {
        if(!this.idEdited){
            this.id= id
            this.idEdited= true //setea el id a true
            return "Id editado"
        }
        return "no se pudo editar el id"
    }
}
