async function fetchProfileData() {
    try {
        const response = await fetch('url-do-seu-endpoint');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados do perfil');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar os dados do perfil:', error);
        return null;
    }
}

function loadProjectHTML(index) {
    // Supondo que você tenha um array com o HTML de cada projeto
    const projectsHTML = [
        '<div>Projeto 1 HTML...</div>',
        '<div>Projeto 2 HTML...</div>',
        // ...
    ];

    const projectBox = document.querySelector('.project-box');
    projectBox.innerHTML = projectsHTML[index];
}

async function displayItemCount() {
    const data = await fetchProfileData();
    if (data && data.itens) {
        const boxButtons = document.querySelector('.box-buttons');
        boxButtons.innerHTML = ''; // Limpa os botões existentes

        data.itens.forEach((item, index) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = index + 1; // Define o texto do botão para o índice + 1

            // Adiciona um evento de clique ao botão para carregar o HTML do projeto
            button.addEventListener('click', () => {
                loadProjectHTML(index);
            });

            li.appendChild(button);
            boxButtons.appendChild(li);
        });
    }
}

displayItemCount();