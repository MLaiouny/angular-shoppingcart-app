export class Fruit {
    public name: string;
    public shortDescription: string;
    public longDescription: string;
    public imagePath: string;
    public price: number;

    constructor(imagePath: string, name: string, shortDesc: string, 
        longDesc: string , price: number) {
        this.imagePath = imagePath;
        this.name = name;
        this.shortDescription = shortDesc;
        this.longDescription = longDesc;
        this.price = price;
    }
}
