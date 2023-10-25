function contar(){
    let inicio = document.getElementById('i1')
    let fim = document.getElementById('f1')
    let passo = document.getElementById('p1')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else {
       res.innerHTML = 'Contando: '
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       for(let c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449} `
       }
       res.innerHTML += `\u{1F3C1}`
    }
}