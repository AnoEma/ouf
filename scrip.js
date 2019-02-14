let filme =[
    { filme: 'jumaji', classificacao: '12'},
    { filme: 'harry', classificacao: '14'},
    { filme: 'batman', classificacao: '11'},
    { filme: 'xXx', classificacao: '18'}
]

let idade = Number(prompt('Por favor digite sua idade: '));

for (let item in filme) {
    if (idade >= filme[item].classificacao) {
        console.log(filme[item].filme);
    }
}