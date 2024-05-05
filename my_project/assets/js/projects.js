async function fetchProfileData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/ErickDutra/my_portfoil/main/my_project/assets/data/data.json');
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
        boxButtons.innerHTML = '';

        data.itens.forEach((item, index) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = index + 1; 

            
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
        
    <img src="${item.imagem}" alt="">

    <div class="about-project" >
    <h2>${item.title}</h2>  
    
 

    <p>${item.description}</p>


    <div class="button-git">
    <a href="">
    <p>GitHub</p>
    <img src="/assets/img/icons/github.svg" alt="${item.url}">
    </a>
</div>
    <h3>Ferramentas:</h3>
    <ul>
    ${item.ferramentas.map(ferramenta => `<li><p>${ferramenta}</p></li>`).join('')}
    </ul>
    
   </div>
   `;
}

displayItemCount();