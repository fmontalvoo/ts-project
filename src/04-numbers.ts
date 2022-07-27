(() => {
    let price = 1.5;
    console.log(price);

    let age: number = 12;

    let stock: number;
    console.log(stock);
    if (stock > 10) {
        console.log('stock: '.concat(stock));
    }

    let discount = parseInt('14');
    console.log(discount);
    console.log(typeof discount);

    let hex = 0xdef; // Hexadecimal
    console.log(hex);
    let bin = 0b0111; // Binario
    console.log(bin);

    const num: Number = 10;
    console.log(num, num.toExponential(), num.toFixed(2), num.toString());
})();