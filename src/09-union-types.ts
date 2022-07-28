(() => {
    let userId: number | string;
    userId = 1;
    userId = '1';
    // userId = true; // Error

    function greetings(text: string | number) {
        if (typeof text === 'string')
            console.log(`string: ${text}`, text.length, text.toLocaleUpperCase());
        else
            console.log(`number: ${text.toFixed(1)}`, text.toExponential());
    }
    greetings('Hello');
    greetings(1);
})();