import { Purchase } from '../../purchase.model';


export class CartService {
    public purchases: Purchase[]= [];
    public currentEditIndex = -1;
    public totalPrice = 0;
    public count = 0;

    createPurchase(index: number, quantity: number, price: number) {
        const p = new Purchase(index, quantity, price);
        this.purchases.push(p);
        this.totalPrice = this.totalPrice + price;
        this.count++;

    }

    getTotalPrice() {
        return this.totalPrice;
    }
    increasePrice(p: number) {
        this.totalPrice = this.totalPrice + p;
    }
     decreasePrice(p: number) {
         this.totalPrice = this.totalPrice - p;
    }

    getCount() {
        return this.count;
    }
    getPurchases() {
        return this.purchases;
    }

    getPurchase(id: number) {
        return this.purchases[id];
    }

    deletePurchase(index: number) {
        this.totalPrice = this.totalPrice - this.purchases[index].price;
        this.purchases.splice(index, 1);
        this.count = this.count - 1;
        this.count = this.purchases.length;
    }

    setCurrentEditIndex(index: number) {
        this.currentEditIndex = index;
    }

    getCurrentEditIndex() {
        return this.currentEditIndex;
    }

    updatePurchase(index: number, purchase: Purchase) {
        this.purchases[index] = purchase;
    }

    deleteCart() {
       this.purchases = []; 
       this.totalPrice = 0;
       this.count = 0;
    }
}

