(() => {
    type UserID = number | string | boolean;
    let userId: UserID;

    // Literal types
    type ShirtSize = 'L' | 'M' | 'S';
    let shirtSize: ShirtSize = 'L';
    // shirtSize = 'XS'; // Error
    console.log(shirtSize);

    function fn(userId: UserID, shirtSize: ShirtSize) {
        if (typeof userId === 'string')
            console.log(`string: ${userId}`, shirtSize);
        else if (typeof userId === 'number')
            console.log(`number: ${userId}`, shirtSize);
        else
            console.log(`boolean: ${userId}`, shirtSize);
    }

    fn('uno', 'L'); fn(1, 'S'); fn(true, 'M');
})();