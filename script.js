const botao = document.querySelector('#botao')
const res = document.querySelector('.resultado')

/* 
//1000 Hello World!
console.log("Hello World!")


//1001 Extremamente Básico
const soma = () => {
    const num1 = parseInt(document.querySelector('.num1').value)
    const num2 = parseInt(document.querySelector('.num2').value)
    
    const x = num1 + num2
    res.innerHTML = `X = ${x}`

}

// 1002 Área do Círculo
const circulo = () => {
    const num1 = parseFloat(document.querySelector('.num1').value)

    
    const n = 3.14159
    const area = n * Math.pow(num1, 2)
    res.innerHTML = `A=${area.toFixed(4)}`

}

// 1003 Soma Simples
const simples = () => {
    const num1 = parseInt(document.querySelector('.num1').value)
    const num2 = parseInt(document.querySelector('.num2').value)
    
    const x = num1 + num2
    res.innerHTML = `SOMA = ${x}`

}


//1004 Produto Simples
const produto = () => {
    const num1 = parseInt(document.querySelector('.num1').value)
    const num2 = parseInt(document.querySelector('.num2').value)
    
    const prod = num1 * num2
    res.innerHTML = `PROD =  ${prod}`

}


// 1005 Média 1
const media1 = () => {
    const a = parseFloat(document.querySelector('.num1').value)
    const b = parseFloat(document.querySelector('.num2').value)

    const media = ( (a * 3.5) + (b * 7.5)) /11

    res.innerHTML = `MEDIA = ${media.toFixed(5)}`
}


// 1006 Média 2
const media2 = () => {
    const a = parseFloat(document.querySelector('.num1').value)
    const b = parseFloat(document.querySelector('.num2').value)
    const c = parseFloat(document.querySelector('.num3').value)

    const media = ( (a * 2.0) + (b * 3.0) + (c * 5.0)) /10.0

    res.innerHTML = `MEDIA = ${media.toFixed(1)}`
}

//1007 Diferença

const diferenca = () => {
    const a = parseInt(document.querySelector('.num1').value)
    const b = parseInt(document.querySelector('.num2').value)
    const c = parseInt(document.querySelector('.num3').value)
    const d = parseInt(document.querySelector('.num4').value)

    const dife = (a * b - c * d)
    res.innerHTML = `DIFERENCA = ${dife}`

}


//1008 Salário
const salario = () => {
    const funcionario = parseInt(document.querySelector('.num1').value)
    const horasTrabalhadas = parseInt(document.querySelector('.num2').value)
    const horas = parseFloat(document.querySelector('.num3').value)

    const sal = horasTrabalhadas * horas
    res.innerHTML = `
        NUMBER = ${funcionario} <br>
        SALARY = U$ ${sal.toFixed(2)}
    `
}


// 1009 Salário com Bônus
const bonus = () => {
    const name = parseInt(document.querySelector('.num1').value)
    const salarioFixo = parseInt(document.querySelector('.num2').value)
    const vendas = parseFloat(document.querySelector('.num3').value)

    const porcetagemDasVendas = vendas * (15/100)
    const bonusdeVendas = salarioFixo + porcetagemDasVendas
    res.innerHTML = `TOTAL = R$  ${bonusdeVendas.toFixed(2)}`
}


//1010 Cálculo Simples

const simples = () => {
    const valor1 = (document.querySelector('.num1').value).split(" ")
    const valor2 =(document.querySelector('.num2').value).split(" ")

    const arrayValor1 = valor1.map(Number)
    const arrayValor2 = valor2.map(Number)
    console.log(arrayValor1)
    console.log(arrayValor2)

    const somaArrayValor1 = arrayValor1[1] * arrayValor1[2]
    const somaArrayValor2 = arrayValor2[1] * arrayValor2[2]

    const valorTotal = somaArrayValor1 + somaArrayValor2

    res.innerHTML =`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`
}


//1011 Esfera
const esfera = () => {
    const raio = parseInt(document.querySelector('.num1').value)

    const volume = (4/3) * 3.14159 * Math.pow(raio, 3)

    res.innerHTML = `VOLUME =  ${volume.toFixed(3)}`
}


//1012 Área
const area = () => {
    const Valor = (document.querySelector('.num1').value).split(" ")
    const arrayValor = Valor.map(Number)

    const a = arrayValor[0]
    const b = arrayValor[1]
    const c = arrayValor[2]

    const trianguloRetangulo = (a * c) /2
    const circuloDeRaio = Math.pow(c, 2) * 3.14159
    const trapezio = ((a + b) * c) / 2
    const quadrado = Math.pow( b, 2)
    const retangulo = a * b

    res.innerHTML = `
        TRIANGULO: ${trianguloRetangulo.toFixed(3)}<br>
        CIRCULO: ${circuloDeRaio.toFixed(3)} <br>
        TRAPEZIO: ${trapezio.toFixed(3)} <br>
        QUADRADO: ${quadrado.toFixed(3)} <br>
        RETANGULO: ${retangulo.toFixed(3)}
    `
}


// 1013 O Maior
const maior = () => {

    const Valor = (document.querySelector('.num1').value).split(" ")
    const arrayValor = Valor.map(Number)

    const a = arrayValor[0]
    const b = arrayValor[1]
    const c = arrayValor[2]

    const maiorAb =(a + b + Math.abs(a-b))/ 2
    const maiorBc = (maiorAb + c  + Math.abs(maiorAb - c )) /2

    res.innerHTML = `${maiorBc} eh o maior`
    
}

botao.addEventListener('click', maior)

algarimos romanos
function romanos2int (romanos) {
    var n = 0;
    var numeros = {
      "I": 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    for(var i = 0; i < romanos.length; i++){
      var atual = romanos[i];
      var prox = romanos[i + 1] ;
  
      if(prox && numeros[prox] > numeros[atual]){
        n -= numeros[atual];
      }
      else{
        n += numeros[atual];
      }
    }
  
    return n      
}


Exemplo 1:

Entrada: nums = [1,2,3,4]
 Saída: [1,3,6,10]
 Explicação: A soma corrente é obtida da seguinte forma: [1, 1+2, 1+2+3, 1+2+ 3+4].
Exemplo 2:

Entrada: nums = [1,1,1,1,1]
 Saída: [1,2,3,4,5]
 Explicação: A soma corrente é obtida da seguinte forma: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Exemplo 3:

Entrada: nums = [3,1,2,10,1]
 Saída: [3,4,6,16,17]


const leet = (nums) => {
    
    let runningSum = []
    let acumulador =0;
    for(let i = 0 ; i < nums.length; i++){
        acumulador += nums[i]
        runningSum[i] = acumulador
    }
    console.log(runningSum)
}
leet([1, 2, 3, 4, 5])

724 . Localizar índice de pivô

Dada uma matriz de inteiros nums, calcule o índice pivô dessa matriz.
O índice pivô é o índice onde a soma de todos os números estritamente à esquerda do índice 
é igual à soma de todos os números estritamente à direita do índice.
Se o índice estiver na borda esquerda da matriz, a soma à esquerda será 0porque não há elementos 
à esquerda. Isso também se aplica à borda direita da matriz.
Retorna o índice pivô mais à esquerda . Se esse índice não existir, retorne -1.

 

Exemplo 1:

Entrada: nums = [1,7,3,6,5,6]
 Saída: 3
 Explicação:
O índice de pivô é 3.
Soma esquerda = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Soma à direita = nums[4] + nums[5] = 5 + 6 = 11
Exemplo 2:

Entrada: nums = [1,2,3]
 Saída: -1
 Explicação: 
Não há índice que satisfaça as condições na declaração do problema.
Exemplo 3:

Entrada: nums = [2,1,-1]
 Saída: 0
 Explicação:
O índice de pivô é 0.
Soma esquerda = 0 (sem elementos à esquerda do índice 0)
Soma direita = nums[1] + nums[2] = 1 + -1 = 0
 

Restrições:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000


const pivotIndex = nums => {
    let leftsum = 0
    let num = nums.reduce((acumulado, atual) => acumulado + atual, 0)
    for(let i = 0; i < nums.length; i++){
        if(num - leftsum - nums[i] === leftsum){
            console.log(i)
           return  i
        }
        leftsum += nums[i]
        
    }
    return -1
}
pivotIndex([1,2,3]);

205. Cordas isomórficas

Dadas duas strings s e t, determine se elas são isomórficas .
Duas strings s e t são isomórficas se os caracteres s podem ser substituídos para obter t.
Todas as ocorrências de um caractere devem ser substituídas por outro caractere, preservando a ordem dos caracteres.
Dois personagens não podem ser mapeados para o mesmo personagem, mas um personagem pode ser mapeado para si mesmo.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

var isIsomorphic = function(s, t) {
    
    let obj1 = {},
        obj2 = {}

    for(let i = 0; i <= s.length; i++){
     if(obj1[s[i]] !== obj2[t[i]]){
        return false
     }else{
        obj1[s[i]] = 1
        obj2[t[i]] = 1
     }
    }
    return true
}

392 . É Subsequência

Dadas duas strings se t, retorne truese sfor uma subsequência de tou falsecaso contrário .
Uma subsequência de uma string é uma nova string que é formada a partir da string original excluindo alguns 
(pode ser nenhum) dos caracteres sem perturbar as posições relativas dos caracteres restantes. 
(ou seja, "ace"é uma subsequência de enquanto não é)."abcde""aec"

Exemplo 1:

Entrada: s = "abc", t = "ahbgdc"
 Saída: true
Exemplo 2:

Entrada: s = "axc", t = "ahbgdc"
 Saída: false 

Restrições:
0 <= s.length <= 100
0 <= t.length <= 104
se tconsistem apenas em letras inglesas minúsculas.


const isSubsequence  = (s, t) => {
    let p1 = 0
    let p2 = 0
    
    for(let i = 0; i < t.length; i++){

        if(s[p1] === t[p2]){
            p1++
            p2++
        }else{
            p2++
        }
    }
    return p0 = p1 === s.length;
}

21. Mesclar duas listas ordenadas
Você recebe as cabeças de duas listas encadeadas ordenadas list1e list2.
Mescle as duas listas em uma lista ordenada . A lista deve ser feita juntando os nós das duas primeiras listas.
Retorne o cabeçalho da lista vinculada mesclada.

Entrada: lista1 = [1,2,4], lista2 = [1,3,4]
 Saída: [1,1,2,3,4,4]
Exemplo 2:

Entrada: lista1 = [], lista2 = []
 Saída: []
Exemplo 3:

Entrada: li

function mergeTwoLists(list1, list2) {
    const list3 = [...list1, ...list2]
    const list4 = []
    for(let i = 0; i <= list3.length; i++){
        if(list1[i] <= list2[i]){
            list3.next 
        }else if(){
            list3.push()
        }
    }
   
   console.log(list4)
};

mergeTwoLists([1,2,4], [1,3,4])


1045 Tipos de Triângulos
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, 
de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de 
triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.


const verificaValor = () => {
    const valor = (document.querySelector('.num1').value).split(" ")
    const nums = valor.map(parseFloat)

    let n1 = nums[0]
    let n2 = nums[1]
    let n3 = nums[2]
    let a,b,c

    if(n1 > n2 && n1 > n3){
        a = n1
        if(n2 > n3){
            b = n2
            c = n3
        }else{
            b = n3
            c = n2
        }
    }
    else if(n2 > n3){
        a = n2

        if(n1 > n3){
            b = n1
            c = n3
        }else{
            b = n3
            c = n1
        }
    }
    else {
        a = n3
        if( n1 > n2 ){
            b = n1
            c = n2
        }else{
            b = n2
            c = n1
        }
    }
    
   return triangulo(a,b,c) 
}


const triangulo = ( a, b ,c) => {
    res.innerHTML = ''

    if(a >= b+c){
        res.innerHTML +="NAO FORMA TRIANGULO <br/>"
    }
    else if(Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2)){
        res.innerHTML +="TRIANGULO RETANGULO <br/>"
    }
    else if(Math.pow(a,2) > Math.pow(b,2) + Math.pow(c,2)){
        res.innerHTML +="TRIANGULO OBTUSANGULO <br/>"
    }
    else if(Math.pow(a,2) < Math.pow(b,2) + Math.pow(c,2)){
        res.innerHTML +="TRIANGULO ACUTANGULO <br/>"
    }

    if(Math.pow(a,2) == Math.pow(b,2) && Math.pow(c,2) == Math.pow(a,2)){
        res.innerHTML +="TRIANGULO EQUILATERO <br/>"
    }
    else if(Math.pow(a,2) == Math.pow(b,2) || Math.pow(c,2) == Math.pow(a,2)
    || Math.pow(c,2) == Math.pow(b,2)){
        res.innerHTML +="TRIANGULO ISOSCELES <br/>"
    }

}

botao.addEventListener('click', verificaValor)
// 1046 Tempo de Jogo
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo,
sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima 
de 1 hora e máxima de 24 horas.
Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.


const horasJogadas = () => {
    const valor = (document.querySelector('.num1').value).split(" ")
    const nums = valor.map(Number)
    const horaInicial = nums[0]
    const minutoInicial = nums[1]
    const horaFinal = nums[2]
    const minutoFinal = nums[3]
    let duracao
    let horas
    let minutos

    const instaciaInicial = horaInicial * 60 + minutoInicial
    const instaciaFinal = horaFinal * 60 + minutoFinal

    if(instaciaInicial < instaciaFinal){
        duracao = instaciaFinal - instaciaInicial
    }
    else{
        duracao = (24 * 60 - instaciaInicial) + instaciaFinal
    }

    horas = duracao / 60
    minutos = duracao % 60

    res.innerHTML = `O JOGO DUROU ${horas.toFixed(0)} HORA(S) E ${minutos} MINUTO(S)`
}

botao.addEventListener("click", horasJogadas)

//1048 Aumento de Salário
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

const aumentaSalario = () => {
    const valor = parseFloat(document.querySelector('.num1').value)
    let aumento
    let novoSalario 
    let percetual
    if(valor > 0 && valor < 400.00){
        percetual = 15
        aumento = (percetual / 100) * valor
        novoSalario = valor + aumento
    }
    else if(valor >= 400.01 && valor < 800.00){
        percetual = 12
        aumento = (percetual / 100) * valor
        novoSalario = valor + aumento
    }
    else if(valor >= 800.01 && valor < 1200.00){
        percetual = 10
        aumento = (percetual / 100) * valor
        novoSalario = valor + aumento
    }
    else if(valor >= 1200.01 && valor <= 2000.00){
        percetual = 7
        aumento = (percetual / 100) * valor
        novoSalario = valor + aumento
    }else{
        percetual = 4
        aumento = (percetual / 100) * valor
        novoSalario = valor + aumento
    }

    res.innerHTML = `
        Novo salario: ${novoSalario.toFixed(2)} <br/>
        Reajuste ganho: ${aumento.toFixed(2)} <br/>
        Em percentual: ${percetual}%
    `
}

botao.addEventListener('click', aumentaSalario)


//1051 Imposto de Renda


const impostoDeRenda = () => {
    const valor = parseFloat(document.querySelector('.num1').value)
    let percentual = (8 / 100) * 1000
    let imposto
    if(valor >= 2000.01 && valor <= 3000.00 ){
        imposto =  percentual + ((8 / 100) * 2.00)
        res.innerHTML = `R$ ${imposto.toFixed(2)}`
    }
    else if(valor >= 3000.01 && valor <= 4500.00){
        imposto =  percentual + ((18 / 100) * 2.00)
        res.innerHTML = `R$ ${imposto.toFixed(2)}`
    }
    else if(valor > 4500.00 ){
        imposto =  percentual + ((28 / 100) * 2.00)
        res.innerHTML = `R$ ${imposto.toFixed(2)}`
    }
    else{
        res.innerHTML = "Inseto"
    }
}

botao.addEventListener('click', impostoDeRenda)

// 1052 Mês
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, 
deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

const mes = () => {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outrubo', 'Novembro', 'Dezembro']
    
    const valor = parseInt(document.querySelector('.num1').value)

    res.innerHTML = `${meses[valor-1]}`

}

botao.addEventListener('click', mes);

// 1059 Números Pares
Faça um programa que mostre os números pares entre 1 e 100, inclusive.

const pares = () => {
    for(let i = 0; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

botao.addEventListener('click', pares)

//1060 Números Positivos

Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos
(desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.



const numerosPositivos = () => {
    const valor = (document.querySelector('.num1').value).split(" ")
    const nums = valor.map(Number)
    let quantidadePostivivo = 0;
    for(let i  of nums){
        if(i > -1){
            console.log('oi')
            quantidadePostivivo++
        }
    }
    res.innerHTML = `${quantidadePostivivo} valores positivos`
}

botao.addEventListener('click', numerosPositivos)


//1061 Tempo de um Evento

Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril,
iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o
evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho
a calcular a duração deste evento.

NÃO FEITO.

// 1064 Positivos e Média

Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos.
Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, 
com um dígito após o ponto decima



const mediaPositivos = () => {
    const valor = (document.querySelector('.num1').value).split(" ")
    const nums = valor.map(Number)
    let quantidadePositivos = 0;
    let positivos = 0;
    let media = 0 ;
    for(let i  of nums){
        if(i > -1){
            positivos += i
            quantidadePositivos++
        }
    }
    media = positivos / quantidadePositivos

    res.innerHTML = `${quantidadePositivos} valores positivos <br>
    ${media.toFixed(1)}`
}

botao.addEventListener('click', mediaPositivos)

// 1065 Pares entre Cinco Números
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores 
digitados são pares e mostre esta informação.

const mediaPositivos = () => {
    const valor = (document.querySelector('.num1').value).split(" ")
    const nums = valor.map(Number)
    let quantidadepares = 0;
    for(let i  of nums){
        if(i % 2 == 0){
            quantidadepares++
        }
    }
    res.innerHTML = `${quantidadepares} valores pares`
}

botao.addEventListener('click', mediaPositivos)

//1066 Pares, Ímpares, Positivos e Negativos

Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, 
quantos valores digitados foram ímpares, quantos valores digitados foram positivos 
e quantos valores digitados foram negativos.

const mediaPNumeros = () => {
    const valor = (document.querySelector('.num1').value).split(" ")
    const nums = valor.map(Number)
    let pares = 0;
    let impares = 0
    let positivos = 0
    let negativos = 0

    for(let i  of nums){
        if(i % 2 == 0  ){
            pares++
            if(i > 0){
                positivos++
            }
        }
        else if(i % 2 != 0){
            impares++
        }
        if( i < 0){
            negativos++
        }
        
    }
    res.innerHTML = `
    ${pares} valor(es) par(es) <br>
    ${impares} valor(es) impar(es) <br>
    ${positivos} valor(es) positivo(s) <br>
    ${negativos} valor(es) negativo(s) <br>
    `
}
botao.addEventListener('click', mediaPNumeros)

// 1067 Números Ímpares
Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, 
um valor por linha, inclusive o X, se for o caso.

const mediaImpares = () => {
    const valor = parseInt((document.querySelector('.num1').value).split(" "))
    
    let impares = 0;
    for(let i = 0; i <= valor; i++){
        
        if(i % 2 != 0){
            console.log(i)
        }
    }
    
}

botao.addEventListener('click', mediaImpares)


// 1070 Seis Números Ímpares
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos 
a partir de X, um valor por linha, inclusive o X ser for o caso.

const mediaImpares = () => {
    const valor = parseInt((document.querySelector('.num1').value).split(" "))
    
    let impares = 0;
    for(let i = valor; i <= 20; i++){
        
        if(i % 2 != 0){
            console.log(i)
        }
    }
    
}
botao.addEventListener('click', mediaImpares)

// 1071 Soma de Impares Consecutivos I
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

const somaImpares = () => {
    const valor = (document.querySelector('.num1').value).split(" ")
    const nums = valor.map(Number)
    let x = nums[0]
    let y = nums[1]
    let min;
    let max;
    if(x > y){
        min = y
        max = x
    }
    else{
        min = x
        max = y
    }

    let somas = 0;
    for(let i = min +1; i < max; i++){
        if(i % 2 != 0){
            console.log(i)
            somas += i
            console.log('soma: ' + somas)
        }
    }
    res.innerHTML = `${somas}`
}
botao.addEventListener('click', somaImpares)

// 1072 Intervalo 2

Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo,
mostrando essas informações.


const intervalo = () => {
    const valor = (document.querySelector('.num1').value).split(" ")
    const nums = valor.map(Number)
    let dentro = 0;
    let fora = 0;

    for (let i = 1; i <= nums[0]; i++){

        if(nums[i] > 9 && nums[i] < 21){
            dentro++
        }else{
            fora++
        }
    }

    res.innerHTML = `${dentro} in <br/> ${fora} out`


}

botao.addEventListener('click', intervalo);

// 1073 Quadrado de Pares

Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, 
de 1 até N, inclusive N, se for o caso.

*/

const quadrado = () => {
    const valor = parseInt((document.querySelector('.num1').value))
}