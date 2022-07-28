(() => {
    let dynamic: any;
    console.log(dynamic, typeof dynamic);
    dynamic = 'string';
    console.log(dynamic, typeof dynamic);
    dynamic = 1;
    console.log(dynamic, typeof dynamic);
    dynamic = true;
    console.log(dynamic, typeof dynamic);
    dynamic = [1, 2, 3];
    console.log(dynamic, typeof dynamic);
    dynamic = { name: 'John' };
    console.log(dynamic, typeof dynamic);
    dynamic = () => { };
    console.log(dynamic, typeof dynamic);

    dynamic = '¡Hola Mundo!';
    const rta = (dynamic as string);
    console.log(rta.toLocaleUpperCase());

    dynamic = 21;
    const rta2 = (dynamic as number);
    const rta3 = (<number>dynamic);
    console.log(rta2, rta3, typeof rta2, typeof rta3);
})();