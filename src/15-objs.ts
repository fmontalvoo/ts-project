(() => {
    type ShirtSize = 'L' | 'M' | 'S';
    type Product = {
        name: string,
        description: string,
        price: number,
        size?: ShirtSize
    };

    let products: Product[] = [];

    const addProduct = (product: Product) => {
        products.push(product);
    }

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
})();