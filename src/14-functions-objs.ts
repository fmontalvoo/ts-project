(() => {

    type ShirtSize = 'L' | 'M' | 'S';

    const login = (credentials: { email: string, password: string }) => {
        console.log(`Logging in with ${credentials.email}`);
    }
    login({ email: 'test@test.com', password: '123' });

    let products: any[] = [];

    const addProduct = (
        product: {
            name: string,
            description: string,
            price: number,
            size?: ShirtSize
        }) => {
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