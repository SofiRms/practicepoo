import { Mascotas} from "../interfaces/Pets";

export class Mascotitas {
    private GestorMascotas : Array<Mascotas> = [];

    generarId () {
        const ids = this.GestorMascotas.map(e => e.getPet().id)//el id es privado, se debe acceder al método
        if (!ids.length) {
          ids.push(0)
        }
        return Math.max(...ids) + 1
      }
    getAll() : Array<Mascotas> { //el array es del tipo de la clase importada
        return this.GestorMascotas
    }

    feedPet( pet: Mascotas){
        return pet.feedPet()
    }

    playPet( pet: Mascotas) {
        return pet.petPlay()
    }

    petCare(pet: Mascotas) {
        return pet.petCare()
    }
    
}