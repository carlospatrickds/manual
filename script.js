// Variável de controle de regime ativo na Tab 3 (Danos Morais)
let currentRegime = 'fazenda';

document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica das Abas (Sidebar Navigation)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            
            const targetContent = document.getElementById(targetId);
            if(targetContent) {
                targetContent.classList.add('active');
            }

            // Scroll to top upon tab switch
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Menu search filter
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const filter = e.target.value.toLowerCase();
        tabBtns.forEach(btn => {
            const text = btn.innerText.toLowerCase();
            btn.style.display = text.includes(filter) ? '' : 'none';
        });
    });

    // Inicializa o visual padrão
    toggleRegime('fazenda');
});

// Função para Trocar Regime (Fazenda vs Privado)
function toggleRegime(regime) {
    currentRegime = regime;
    
    // Atualiza classes dos cards superiores
    document.getElementById('card-fazenda').classList.remove('active');
    document.getElementById('card-privado').classList.remove('active');
    document.getElementById('card-' + regime).classList.add('active');

    // Atualiza o Título e a Tabela Exibida
    const titleEl = document.getElementById('regime-title');
    const tableFazenda = document.getElementById('table-fazenda');
    const tablePrivado = document.getElementById('table-privado');

    if (regime === 'fazenda') {
        titleEl.innerText = 'Regime aplicável · Fazenda Pública';
        tableFazenda.style.display = 'block';
        tablePrivado.style.display = 'none';
    } else {
        titleEl.innerText = 'Regime aplicável · Réu privado';
        tableFazenda.style.display = 'none';
        tablePrivado.style.display = 'block';
    }
}

// Função para a Sanfona (Accordion de Comparativo)
function toggleAccordion() {
    const content = document.getElementById('comparativo-content');
    const btnSpan = document.querySelector('.accordion-btn span');
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        btnSpan.innerText = '⌃';
        document.querySelector('.accordion-btn').firstChild.textContent = 'Exibir comparativo lado a lado ';
    } else {
        content.classList.add('open');
        btnSpan.innerText = '⌄';
        document.querySelector('.accordion-btn').firstChild.textContent = 'Ocultar comparativo lado a lado ';
    }
}
