// console.log("primero");
// mostrarSegundo(mostrarCuarto);//tarda 1 seg
// console.log("tercero");
// function mostrarSegundo(cb) {
//     setTimeout(()=>{
//         cb();
//         console.log("segundo");
//     },1000)
// }

// function mostrarCuarto() {
//     console.log("cuarto");
// }

// const lugaresVisitados = []
// function irDePaseo() {
//   setTimeout(function() {
//     lugaresVisitados.push('Salta');
//     setTimeout(function() {
//       lugaresVisitados.push('Cordoba');
//       setTimeout(function() {
//         lugaresVisitados.push('Jujuy');
//         setTimeout(function() {
//           lugaresVisitados.push('Tierra del fuego');
//           console.log(lugaresVisitados.toString())
//         },2000);
//       },1000);
//     },4000);
//   },1000);
// }
// irDePaseo();// OUTPUT : Salta, Cordoba, Jujuy, Tierra del fuego

/*********************************************************** */
// function volar() {
//     console.log("volar");
// }
// function planear(cbk) {
//     setTimeout(()=>{
//         console.log("planear");
//         cbk();
//     },1000)
// }
// function volver() {
//     console.log("volver");
// }

// function viajar() {
//     volar();
//     planear(function() {
//         planear(function() {
//             planear(function() {
//                 planear(volver);
//             })
//         })
//     })
// }
// viajar();

/******************************************** */
//promises

// console.log("primero");

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             console.log("segundo");
//             resolve();
//         }else reject();
//     }, 1000)
// })

// promesa.then(() => {
//     console.log("tercero");
// }).catch(()=>{
//     console.log("Ocurrio un error");
// })


/************************************* */
//async await

// function volar() {
//         console.log("volar");
// }

// function planear() {
//     setTimeout(()=>{
//         console.log("planear");
//     },1000)
// }

// function volver() {
//     console.log("volver");
// }
    
// async function viajar() {
//     volar();
//     await planear();
//     await planear();
//     await planear();
//     await planear();
//     volver();
// }
// viajar();



/******************************* */
//codigo corregido
//me habia quedado el setTimeOut copiado de antes
//el await necesita de una promesa, por lo tanto el codigo 
//deberia verse asi
function planear() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("planear");
            resolve();
        }, 1000);
    });
}


