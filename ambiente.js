var num = [7,2,3,4,5,6]

num.push(5) //add variável no final
num.sort() //coloca em ordem

console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let c = 4
let pos = num.indexOf(c)
if(pos == -1) {
    console.log('O valor não foi encotrado!')
} else {
    console.log(`O valor ${c} está na posição ${pos+1}`) //+1 por causa do zero
}
