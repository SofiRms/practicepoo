interface Pets {
    id: number;
    name: string;
    happinness: number;
    breed: string;
    hunger: number;
}

export class Mascotas {
    private id: number = 0;
    private name: string = "";
    private happinness: number = 100;
    private breed: string = "";
    private hunger: number = 0; // osea está lleno

    constructor(
        {name,happinness,breed} :
        {name: string, happinness: number, breed: string}
    ){
        this.name = name;
        this.happinness = happinness;
        this.breed = breed;
    }

    getPet(): Pets { //el tipo debe coincidir con la interface, para que el método cumpla con la interface
        return{
            id: this.id,
            name: this.name,
            breed: this.breed,
            hunger: this.hunger,
            happinness: this.happinness
        }
    }
    feedPet() : number {
        return this.hunger += 5, this.happinness += 10
    }

    petPlay(): number{
        return this.happinness += 10, this.hunger += 15
    }

    petCare(){
        console.log("le hiciste mimos a tu mascota, ahora está feliz")
        return this.happinness += 15
    }
}