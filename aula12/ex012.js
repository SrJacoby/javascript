var now = new Date()
var hora = now.getHours()
console.log(`Agora são exatamente ${hora} horas. `)
if (hora <= 11 && hora >= 6) {
    console.log('Bom dia!')
} else if (hora <= 18 && hora >= 12) {
    console.log('Boa tarde!')
}else if (hora < 24 && hora >= 19) {  
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}
