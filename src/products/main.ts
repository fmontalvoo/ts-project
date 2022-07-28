import { products, addProduct, getTotalPrice } from "./product.service";

addProduct({
    name: 'My shirt',
    description: 'My description',
    price: 12.34
});

addProduct({
    name: 'My shirt',
    description: 'My description',
    price: 12.34,
    size: 'L'
});

console.log(products);
console.info(`Total price: ${getTotalPrice()}`);