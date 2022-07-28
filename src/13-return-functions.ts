(() => {
    const calcTotal = (prices: number[]): number => prices.reduce((acc, curr) => acc + curr, 0);
    const prices = [1.23, 2.34, 3.45];
    // const total = calcTotal(prices);
    const printTotal = (prices: number[]): void => {
        const total = calcTotal(prices);
        console.log(`$${total}`);
    }
    printTotal(prices);
})();