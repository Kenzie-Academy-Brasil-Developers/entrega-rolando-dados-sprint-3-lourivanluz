const arrayContador = [0,0,0,0,0,0,0,0,0,0,0]

function geraNumerAleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+ min)
}
for (let contador = 1; contador<=1000; contador++){
    let num = geraNumerAleatorio(1,6) + geraNumerAleatorio(1,6)
    arrayContador[num-2]++
}


function formataResposta (array){
    let resultado = ''
    for (let i = 0; i<array.length;i++){
        resultado+='<strong>'+(i+2)+'</strong>: '+array[i]+'<br>'
    }
    return resultado
}

function criaBarras (array){

    for (let i = 0; i<array.length;i++){
        let div = document.querySelector('.barras').appendChild(document.createElement('div'))
        div.setAttribute('style','height:30px; margin-bottom:5px;background-color:grey; width: '+array[i]+'px')
    }

}

let resposta = formataResposta(arrayContador)
document.body.appendChild(document.createElement('div')).classList.add('flex')
/* setAttribute('class','flex') */
document.querySelector('.flex').setAttribute('style','display: flex;align-items: center;flex-wrap: wrap;')

document.querySelector('.flex').appendChild(document.createElement('p')).innerHTML= "Resposta: <br>"+ resposta
document.querySelector('.flex').appendChild(document.createElement('div')).setAttribute('class','barras')
criaBarras(arrayContador)


