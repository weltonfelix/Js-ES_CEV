function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resultado')
    ///////////////////////////////////////////////
    let start = Number(inicio.value)
    let end = Number(fim.value)
    let step = Number(passo.value)
    ///////////////////////////////////////////////
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        if(step <= 0){
            if (step < 0){
                step = Math.abs(step)
            }else{
                step = 1
            }
            alert(`Passo inválido! Considerando PASSO ${step}`)
        }
        res.innerHTML = 'Contando: <br/>'
        
        if(start < end){
            //-----------Cont. Decrescente-----------
            for (let i = start; i <= end; i += step){
                res.innerHTML += `${i}\u{1F449}`
            }
        }else{
            //------------Cont. Crescente------------
            for (let i = start; i >= end; i -= step){
                res.innerHTML += `${i}\u{1F449}`
            }
             
        }
        res.innerHTML += '\u{1F3F4}'
        
    }
    
}