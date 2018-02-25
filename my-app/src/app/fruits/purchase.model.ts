export class Purchase {
    public index: number;
    public quantity: number;
    public price: number;
    constructor (index: number, q: number, p: number) {
        this.index = index;
        this.quantity = q;
        this.price = p;
    }
}
