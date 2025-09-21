// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo").value;
    //let amigo = inputAmigo.value;
    console.log(inputAmigo);

    if (inputAmigo != ""){
        amigos.push(inputAmigo);
    }else{
        alert("Por favor, ingrese el nombre de un amigo.");
        return;
        }   
    
    console.log(amigos);
    
    
}
