/*mostrar no console " A tabuada de: N é" e embaixo mostrar 
"A tabuada de Nx1 é: " e assim sucetivamente. Tentar fazer com for depois.*/

/*const n = parseInt(prompt("Insira um valor para saber sua tabuada e veja-a no console do browser."));

n0 = n*0
n1 = n*1
n2 = n*2
n3 = n*3
n4 = n*4
n5 = n*5
n6 = n*6
n7 = n*7
n8 = n*8
n9 = n*9
n10 = n*10

console.log(`A tabuada de ${n} é a seguinte:`);
console.log(`A tabuada de ${n} x 0 é: ${n0}`);
console.log(`A tabuada de ${n} x 1 é: ${n1}`);
console.log(`A tabuada de ${n} x 2 é: ${n2}`);
console.log(`A tabuada de ${n} x 3 é: ${n3}`);
console.log(`A tabuada de ${n} x 4 é: ${n4}`);
console.log(`A tabuada de ${n} x 5 é: ${n5}`);
console.log(`A tabuada de ${n} x 6 é: ${n6}`);
console.log(`A tabuada de ${n} x 7 é: ${n7}`);
console.log(`A tabuada de ${n} x 8 é: ${n8}`);
console.log(`A tabuada de ${n} x 9 é: ${n9}`);
console.log(`A tabuada de ${n} x 10 é: ${n10}`);*/

const n = 1;//parseInt(prompt("Insira um valor para saber sua tabuada e veja-a no console do browser."));
console.log(`A tabuada de ${n} é:`);

for (let i = 0; i <= 10; i++) {
    console.log(`${n}x${i}:${n * i}`);
}


