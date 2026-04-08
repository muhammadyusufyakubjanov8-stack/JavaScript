// for (let raqam = 1; raqam <=10; raqam ++) {
//     console.log(raqam)
// }

// =======================================

// let yigindi = 0

// for (let raqam = 1; raqam <= 100; raqam++) {
//     yigindi += raqam
// }
// console.log(yigindi)

// ================================================

// for (let raqam = 0; raqam <= 50; raqam+=2){
//     console.log(raqam)
// }

// ==============================================

// for (let raqam = 1; raqam <= 50; raqam+=2){
//     console.log(raqam)
// }

// ===============================================

// let n = 10
// for (let i = 1; i <= n; i++){
//     console.log(i * i)
// }

// =====================================

// let n = 20
// for(let i = 1; i <= n; i++){
//     if(i % 3 === 0 ) console.log(i)
// }

// =====================================

// let n = 10
// let kopaytirma = 1
// for(let i = 1; i <= n; i++){
//     kopaytirma *= i
// }
// console.log(kopaytirma)

// ========================================

// for (let i = 1; i <= 100; i++){
//     if(i % 5 === 0 && i % 7 === 0) console.log(i);   
// }

// ==============================================

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// ==========================================

// let n = 10
// let yigindi = 0
// for(let i = 1; i <= n; i++){
//     if(i % 2 === 1) yigindi +=i
// }
// console.log(yigindi);

// let n = 27
// let count = 0
// for(let i = 1; i <= n; i++){
//     if(i % 2 === 0) count++
// }
// console.log(count);

// ==============================

// let n = 30
// let max = 0
// for(let k = 1; k <= n; k++){
//     if(max < k)max = k
// }
// console.log(max);

// ======================================

// let count = 0
// for(let i = 1; i <= 20; i++){
//     if(i % 4 === 0) count++
// }
// console.log(count);

// ================================

// let n = 20
// for(let raqam = 1; raqam <= n; raqam++){
//     if(raqam > 10) console.log(raqam)
// }

// ==================================

let n = 9
for(let i = 1; i<=n; i++){
    for(let k = 1; k <= 10; k++){
        console.log(`${i} x ${k} = ${i * k}`)
    }
    console.log("=========================================")
}