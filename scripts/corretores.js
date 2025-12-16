const array_imagens_corretores = [
    "img/corretores/nathalia.png",
    "img/corretores/gabriel.jpg",
    "img/corretores/joaquim.jpg",
    "img/corretores/adriana.jpg"
]

//DECLARANDO OBJETOS
const obj_select_corretores = document.querySelector('#select-corretores');
const obj_imagem_corretores = document.querySelector('#imagem-corretores');

//DECLARANDO EVENTOS
obj_select_corretores.addEventListener('change', funTrocaFoto);


//DECLARANDO FUNCOES
function funTrocaFoto(){
    switch(obj_select_corretores.value){
        case "nathalia":
            obj_imagem_corretores.src = array_imagens_corretores[0];
            break;
        case "gabriel":
            obj_imagem_corretores.src = array_imagens_corretores[1];
            break;
        case "joaquim":
            obj_imagem_corretores.src = array_imagens_corretores[2];
            break;
        case "adriana":
            obj_imagem_corretores.src = array_imagens_corretores[3];
            break;
    }
}


