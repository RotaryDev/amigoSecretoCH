// Eincipal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");


function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo").value;
   
    if (inputAmigo != ""){
        listAmigos.push(inputAmigo);
        console.log(inputAmigo);
        ulListaAmigos.innerHTML += `<li>${inputAmigo}</li>`; 
    }else{
        alert("Por favor, ingrese el nombre de un amigo.");
        return;
        } 
    console.log(listAmigos);
    
    
}
