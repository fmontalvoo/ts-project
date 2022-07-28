(() => {
    // let _number: number = undefined;
    // let _string: string = null;

    let _null: null = null;
    let _undefined: undefined = undefined;
    console.log(typeof _null, typeof _undefined);

    let _number: number | null = null;
    _number = 7;

    let _string: string | undefined = undefined;
    _string = 'abc';

    function fn(text: string | null) {
        let hello = 'Hello ';
        if (text)
            hello += text;
        else
            hello += 'Nobody';
        console.log(hello);
    }
    fn('World');
    fn(null);

    function _fn(text: string | null) {
        let hello = 'Hello ';
        hello += text?.toUpperCase() || 'Nobody';
        console.log(hello);
    }

    _fn('World');
    _fn(null);
})();