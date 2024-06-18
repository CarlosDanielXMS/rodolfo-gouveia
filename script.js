// Funcao principal
function main() {
    const abertura = document.querySelector(".abertura");
    const container = document.querySelector(".container");
    const experienciaItems = document.querySelectorAll(".experiencia-item");
    const formacaoItems = document.querySelectorAll(".formacao-item");
    const botoesExpandirDetalhes = document.querySelectorAll(".expandir-detalhes");

    // invoca a funcao esconderAbertura
    esconderAbertura(abertura);

    // invoca a funcao animarEntradaItens
    animarEntradaItens(container, experienciaItems, formacaoItems);

    // Adiciona listeners para os botões de expandir detalhes
    adicionarListenersExpandirDetalhes(botoesExpandirDetalhes);

    // Adiciona listeners para os itens de experiência
    adicionarListenersExperienciaItems(experienciaItems);

}

// Esconde a tela de abertura após um intervalo
function esconderAbertura(abertura) {
    setTimeout(() => {
        abertura.classList.add("hidden");
    }, 2500);
}

// Invoca a função animarItens para experienciaItens e formacaoItens (efeito cascata)
function animarEntradaItens(container, experienciaItems, formacaoItems) {
    setTimeout(() => {
        container.style.opacity = "1";
        animarItens(experienciaItems);
        animarItens(formacaoItems);
    }, 4000);
}

// Função para animar um conjunto de itens
function animarItens(items) {
    items.forEach((item, index) => {
        setTimeout(() => {
            animarItem(item);
        }, index * 100);
    });
}

// Anima um item específico
function animarItem(item) {
    item.style.transform = "translateY(0)";
    item.style.opacity = "1";
}

// Adiciona listeners para os botões de expandir detalhes
function adicionarListenersExpandirDetalhes(botoesExpandirDetalhes) {
    botoesExpandirDetalhes.forEach(botao => {
        botao.addEventListener("click", () => {
            toggleDetalhes(botao);
        });
    });
}

// Alterna a exibição dos detalhes (expandir/minimizar)
function toggleDetalhes(botao) {
    const detalhes = botao.parentNode.querySelectorAll(".detalhes");
    detalhes.forEach(detalhe => {
        if (detalhe.style.display === "block") {
            esconderDetalhes(detalhe);
            botao.textContent = "Detalhes";
        } else {
            exibirDetalhes(detalhe);
            botao.textContent = "Minimizar";
        }
    });
}

// Exibe os detalhes
function exibirDetalhes(detalhe) {
    detalhe.style.display = "block";
    setTimeout(() => {
        detalhe.style.opacity = "1";
    }, 10);
    detalhe.classList.add("active");
}

// Minimiza os detalhes
function esconderDetalhes(detalhe) {
    detalhe.style.opacity = "0";
    setTimeout(() => {
        detalhe.style.display = "none";
    }, 500);
    detalhe.classList.remove("active");
}

// Adiciona listeners para os itens de experiência
function adicionarListenersExperienciaItems(experienciaItems) {
    experienciaItems.forEach(item => {
        const btnDetalhes = item.querySelector(".expandir-detalhes");
        btnDetalhes.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
}

function reproduzir() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Invoca a função principal quando o DOM estiver carregado desencadeando as outras funções.
document.addEventListener("DOMContentLoaded", main);
