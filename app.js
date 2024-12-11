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

// let sum = +prompt('uch xonali sonni kirting')
// let birinchiSon = sum %10
// let ikkinchiSon = ((sum %100) - birinchiSon) / 10
// console.log( ikkinchiSon )

// Begin1. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin. 
// L= 2 * π * R, S = π * R^2
  
// let  r = 4
// let pi = 3.14
// let l= 2*pi*r
// let s = pi*r**2

// console.log(`uzunligi ${l} yuzasi ${s} `)
// Integer1. Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi raqamini, so`ng birlar xonasidagi raqamini hamda ularning yig’indisini chiqaruvchi programma tuzilsin.

// let son = +prompt('ikki xonali soni kiriting')
// let birlik = son % 10
// let onlik = Math.floor(son / 10)
// let yigindi = `${onlik}${birlik}`
//  console.log(`o'nliklar ${onlik}`)
//  console.log(`birliklar son ${birlik}`)
//  alert(`o'nliklar ${onlik} birliklar son ${birlik} yig'indi ${yigindi}`)

// Integer2. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.

// let son = +prompt('ikki xonali soni kiriting')
// let a = Math.floor(son / 10)
//  let b = son % 10
//  alert(`${b} ${a}`)

// Integer3. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.
// let son = +prompt('uch honali soni kiriting')
// let birinchisi = Math.floor (son % 100)
// let ikki = Math.floor(birinchisi / 10)
// alert(`${ikki}`)

// Integer4. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib, berilgan sonni yuzliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 1239
// Output: 2
// let son = +prompt('tort honali soni kiriting')
// let birinchisi = Math.floor((son %1000 /100))
// alert(`${birinchisi}`)

// Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin. 
// Input: 123
// Output: 213
let son = +prompt('uch xonali soni kiriting')
let birinchisi = Math.floor(son /100)
let ikkinchisi = son % 10
let uchunchi = son %100
let s = Math.floor(uchunchi/10)
alert(`${s}${birinchisi }${ikkinchisi}`)
