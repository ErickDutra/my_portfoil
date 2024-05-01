async function fetchProfileData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/ErickDutra/New_repository/main/assets/data/profile.json');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados do perfil');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar os dados do perfil:', error);
        return null;
    }
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
                loadProjectHTML(item);
            });

            li.appendChild(button);
            boxButtons.appendChild(li);
        });
    }
}

function loadProjectHTML(item) {
    const projectBox = document.querySelector('.project-box');
    projectBox.innerHTML = `
        <div class="about-information">
            <div class="about-intro">
                <h2>
                    ${item.title}
                </h2>
                <p>
                    ${item.description}
                </p>
            </div>
            <div class="about-text">
                <p>
                    ${item.text}
                </p>
            </div>
        </div>`;
}
displayItemCount();