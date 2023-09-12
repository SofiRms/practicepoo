import { contacto } from "../interfaces/Contactos";

export class Contactos {
    private ListaContactos: Array<contacto> = []

    addContact(contacto: contacto) {
        return this.ListaContactos.push(contacto);
    }
    searchName(name: string) {
        return this.ListaContactos.filter(name => name === name) //se iguala al name que viene en el parámetro
    }
    getAll(){
        return this.ListaContactos
    }
}
