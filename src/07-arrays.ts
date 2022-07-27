(() => {
    const list = [1, 2, 3, 4, 5, '6', true];
    const [first, ...rest] = list;
    console.log(first);
    console.log(rest);

    let mixed: (number | string | boolean)[] = [];
    mixed.push(1);
    mixed.push('2');
    mixed.push(true);
    console.log(mixed);

    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const newList = numbers.map(n => n * 2);
    console.log(newList);
})();