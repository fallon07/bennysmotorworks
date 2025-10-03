document.addEventListener('DOMContentLoaded', () => {
    // 1. Obter os elementos DOM
    const btnCadastro = document.getElementById('btn-cadastro');
    const btnLogin = document.getElementById('btn-login');
    const authModal = document.getElementById('auth-modal');
    const closeModal = document.querySelector('.close-modal');

    // 2. Função para mostrar o modal
    const showModal = () => {
        authModal.style.display = 'block';
    };

    // 3. Função para esconder o modal
    const hideModal = () => {
        authModal.style.display = 'none';
    };

    // 4. Adicionar eventos de clique para abrir o modal
    btnCadastro.addEventListener('click', showModal);
    btnLogin.addEventListener('click', showModal);

    // 5. Adicionar evento de clique para fechar o modal
    closeModal.addEventListener('click', hideModal);

    // 6. Fechar o modal se o usuário clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === authModal) {
            hideModal();
        }
    });

    // 7. Exemplo de programação de formulário (apenas para demonstração)
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real do formulário
        
        // Em um site real, você enviaria os dados para um servidor aqui.
        alert('Tentativa de Login efetuada! Em um site real, esta ação faria o login no servidor.');
        hideModal(); // Esconde o modal após a "tentativa"
    });
});