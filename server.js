/*import express from 'express';
const app = express();
const port = 3000;

app.get('/teste', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});*/

const numeroGrupo = [4, 9, 11, 12, 10, 20, 16, 19, 1, 6, 17, 15, 18, 7, 5, 14, 13, 2, 8, 3];
const ordemApresentacao = ['Primeira', 'Segunda', 'Terceira', 'Quarta', 'Quinta', 'Sexta', 'Sétima', 'Oitava', 'Nona', 'Décima', 'Décima primeira', 'Décima segunda', 'Décima terceira', 'Décima quarta', 'Décima quinta', 'Décima sexta', 'Décima sétima', 'Décima oitava', 'Décima nona', 'Vigésima'];

for (let i = 0; i <= numeroGrupo.length - 1; i++) {
    console.log(`${ordemApresentacao[i]} apresentação: Grupo ${numeroGrupo[i]}.`)
}