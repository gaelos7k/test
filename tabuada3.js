function tabuada (number, number2) {
    console.log(`A tabuada do ${number} é :`);
    
    for ( let i = 0; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    console.log(`E a tabuada do ${number2} é :`);
    
    for ( let i = 0; i <= 10; i++) {
        console.log(`${number2} x ${i} = ${number2 * i}`);
    }
}

tabuada(6, 7);