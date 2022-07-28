(() => {
    type ShirtSize = 'L' | 'M' | 'S';

    function toJson(title: string, createdAt: Date, size: ShirtSize) {
        return {
            title,
            createdAt,
            size
        };
    }

    const product = toJson('My shirt', new Date(), 'L');
    console.log(product);

    const _toJson = (title: string, createdAt: Date, size?: ShirtSize) => (
        {
            title,
            createdAt,
            size
        }
    );

    const product2 = _toJson('My shirt', new Date());
    console.log(product2);
})();