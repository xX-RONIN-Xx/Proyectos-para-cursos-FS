"use strict"
let url="https://rickandmortyapi.com/api/character";

async function mostrarData(){
    let res= await fetch(url)
    let data= await res.json()
    console.log( data.results);
    data.results.forEach(element => {
        document.querySelector("#table").innerHTML +=
        `<tr>
          <td> ${element.name} </td> 
          <td> ${element.species} </td>
          <td> ${element.id} </td>
        </tr>
          `
    });
//     tratar resultados

}
mostrarData();