var lista = []
function adicionar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seln')
    let item = document.createElement('option')
    if (lista.indexOf(Number(num.value)) == -1 && (Number(num.value) >= 1 && Number(num.value) <= 100) && num.value.length != 0){
        lista.push(Number(num.value))
        item.text = `Valor ${num.value} adicionado.`
        item.value = `val${num.value}`
        tab.appendChild(item)
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = null
    res.innerHTML = ''    
}
function finalizar(){
    if (lista.length > 0){
        lista.sort()
    var res = document.getElementById('res')
    res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${lista[(lista.length - 1)]}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma(lista)}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media(lista)}.</p>`
    }else{
        alert('Adicione valores antes de finalizar!')
    }
    
    
}

function soma(a){
    let s = 0
    for (i in lista){
        s += lista[i]
    }
    return s
}

function media(a){
    let s = soma(a)
    let media = s / a.length
    return media
}