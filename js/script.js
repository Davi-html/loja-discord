function clickMenu(){
    if (nav.style.display == 'block'){
        nav.style.display = 'none'
    }else{
        nav.style.display = 'block'
    }
}

let el = document.querySelector("#text");
let text = "site";
let interval = 400;

function showText(el, text, interval) {
    let char = text.split("").reverse();

    let typer = setInterval(() => {
        if (!char.length) {
            clearInterval(typer); // Limpa o intervalo atual
            setTimeout(() => {
                el.innerHTML = ""; // Limpa o conteúdo do elemento
                showText(el, text, interval); // Chama a função novamente para iniciar um novo loop
            }, interval); // Aguarda um intervalo antes de começar o próximo loop
        } else {
            let next = char.pop();
            el.innerHTML += next;
        }
    }, interval);

}

showText(el, text, interval); // Inicializa o primeiro loop
