export const romanNumerals = (num) => {
    if (num === undefined) throw new Error('number is required'); 

    const roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1    
    };

    let accumulator = '';

    for(const key in roman) {
        const numberValue = roman[key];

        while(numberValue <= num) {
            num -= numberValue;
            accumulator += key;
        }
    }

    return accumulator;

};

// PseudoCode
    // convert int to string in roman numbers.
    // eg. 1 --> I
    // 2 --> II
    // 3 --> III
    // 4 --> IV etc
    // find out if roman numbers method exist in JavaScript.