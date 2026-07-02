document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica de Navegação das Abas (Tabs)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove classe active de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Adiciona classe active no selecionado
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // No mobile, fecha o menu ao clicar em uma aba
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
            // Retorna ao topo ao trocar de aba
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 2. Menu Mobile Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // 3. Sistema de Busca Simples no Menu
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const filter = e.target.value.toLowerCase();
        tabBtns.forEach(btn => {
            const text = btn.innerText.toLowerCase();
            btn.style.display = text.includes(filter) ? '' : 'none';
        });
    });

    // 4. Salvar progresso do Checklist (Aba 12) usando localStorage
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    
    // Carregar estado salvo ao iniciar
    checkboxes.forEach(box => {
        const savedState = localStorage.getItem(box.id);
        if (savedState === 'true') {
            box.checked = true;
        }

        // Salvar estado ao alterar
        box.addEventListener('change', (e) => {
            localStorage.setItem(e.target.id, e.target.checked);
        });
    });

    // 5. Botão "Voltar ao Topo"
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
