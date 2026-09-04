async function carregarPromocoesNaTela() {
    try {
        // 1. Busca os dados na rota do backend
        const resposta = await fetch('/api/promocoes');
        const promocoes = await resposta.json();
        
        // 2. Acha a vitrine e o molde
        const container = document.getElementById('minhas-promocoes');
        const molde = document.getElementById('molde-promocao');
        
        container.innerHTML = ''; // Limpa a tela por garantia
        
        // 3. Para cada promoção no banco de dados...
        promocoes.forEach(promo => {
            // Tira uma "xerox" do molde
            const copia = molde.content.cloneNode(true);
            
            // Preenche com os dados do banco
            copia.querySelector('.promocao-titulo').textContent = promo.titulo;
            copia.querySelector('.promocao-desconto').textContent = promo.desconto;
            copia.querySelector('.promocao-desc').textContent = promo.descricao;
            
            // Cola a xerox pronta na vitrine
            container.appendChild(copia);
        });
        
    } catch (erro) {
        console.error("Ops! Erro ao tentar carregar promoções:", erro);
    }
}

// Manda a função rodar quando a página abre!
carregarPromocoesNaTela();