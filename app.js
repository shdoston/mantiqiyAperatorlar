// let a = 5
// let b = 2
// if (a>2 && b<=3){
//     console.log('true')
// }else{
//     console.log('false')
// }

// let a = 3
// let b = 4
// let c = 5

// if ( a <=b && b <= c){
//     console.log("true")
// } else {
//     console.log("false")
// }

// let a = 8
// let b = 6
// if (a % 2 == 0 && b % 2 === 0){
//     console.log("true")
// } else {
//     console.log('true')
// }

// let a = -1
// let b = 3
// let c = 4
// if ( a > 0 || b > 0 || c > 0){
//     console.log("true")
// } else{
//     console.log("false")
// }

// let a = 6
// if ( a > 0){
//     console.log('true')
// } else {
//     console.log('false')
// }

// let b = 3
// if ( b % 2 !== 0) {
//     console.log("true")
// } else {
//     console.log('true')
// }

// let radis = prompt('radiusni kiriting')
// let pi = 3.14
// let l = 2*pi * radis
// let s = pi *radis**2
// alert(`uzunligi ${l} yuzasi ${s}`)

// let a = +prompt('a sonni kiriting')
// let b = +prompt('b sonni kiriting')
// let g = Math.sqrt(a * b)
// alert(`o'rta geometriyasi ${g}`)

// let x = +prompt('x qiymatini kiriting')
// let y = 3*x**6-6*x**2-7
// alert(` y funksiyani qiymat ${y}`)

// let n = +prompt('kattaroq sekundni kiriting')
// alert(`kun boshidan beri ${n/60} saot o'tdi ${(n/60)/60} miut o'tdi ${n} sekund o'tdi`)

//  let ikki = +prompt(`ikki xonali soni kiriting`)
// let ikkinchisi = Math.floor(ikki /10)
// let birinchisi = ikki % 10
// let sum = (`${ikkinchisi+ birinchisi}`)
// alert(`b ${birinchisi} ${ikkinchisi} ularni yig'indisi  ${sum}`) 

// let sum = +prompt('ikki xonali soni kirting')
// let birinchisi = sum % 10
// let ikkinchisi = Math.floor(sum /10)
// alert(`${birinchisi} ${ikkinchisi}`)

let sum = +prompt('uch xonali sonni kirting')
let birinchiSon = sum %10
let ikkinchiSon = ((sum %100) - birinchiSon) / 10
console.log( ikkinchiSon )