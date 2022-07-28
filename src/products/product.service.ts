import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (product: Product) => {
    products.push(product);
}

export const removeProduct = (product: Product): void => {
    const index = products.indexOf(product);
    if (index > -1) {
        products.splice(index, 1);
    }
}

export const getTotalPrice = (): number => products.reduce((acc, cur) => acc + cur.price, 0);