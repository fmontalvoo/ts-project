(() => {
    let isDone: boolean = false;
    console.log(isDone);

    let isActive!: boolean;
    console.log(isActive);

    const random = Math.random();
    console.log(random);
    isActive = random > 0.5;
    console.log(isActive);
})();