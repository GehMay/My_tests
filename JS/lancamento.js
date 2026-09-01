async function carregarLivrosNaTela() {
    try {
        const resposta = await fetch('/api/lancamentos');
        const livros = await resposta.json();
        
        // 1. Pegamos a div vazia que você preparou no HTML
        const container = document.getElementById('meus-lancamentos');
        
        // 2. Limpamos ela só por garantia
        container.innerHTML = '';
        
        // 3. Para cada livro que veio do banco, ele vai desenhar um card!
        livros.forEach(livro => {
            const cardHtml = `
                <article class="card">
                    <div class="card-banner" aria-hidden="true"></div>
                    <div class="card-body">
                        <h3 class="card-title">${livro.titulo}</h3>
                        <span class="badge">${livro.categoria || 'Geral'}</span>
                        <p class="card-descricao">
                            <strong>Autor:</strong> ${livro.autor} <br>
                            <strong>Preço:</strong> R$ ${livro.preco}
                        </p>
                    </div>
                </article>
            `;
            
            // Adiciona esse card novinho dentro da div
            container.innerHTML += cardHtml;
        });
        
    } catch (erro) {
        console.error("Ops! Erro ao tentar carregar os livros:", erro);
    }
}

carregarLivrosNaTela();