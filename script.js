// Dados do carrinho
let cart = [];

// Dados de filmes para a loja
const storeMovies = [
    {
        id: 1,
        title: "Vingadores: Ultimato",
        category: "2019 AÇÃO",
        description: "A batalha final contra Thanos",
        rating: 5,
        price: 29.90,
        image: "https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8j4bV.jpg"
    },
    {
        id: 2,
        title: "Interestelar",
        category: "2014 FICÇÃO",
        description: "Uma jornada épica através do espaço",
        rating: 5,
        price: 24.90,
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        id: 3,
        title: "Coringa",
        category: "2019 DRAMA",
        description: "A origem do vilão mais icônico",
        rating: 5,
        price: 27.90,
        image: "https://image.tmdb.org/t/p/w500/8CRw8z9i9lA5gIen333m5iA9eQ.jpg"
    },
    {
        id: 4,
        title: "Velozes e Furiosos X",
        category: "2023 AÇÃO",
        description: "Corridas insanas e muita adrenalina",
        rating: 4,
        price: 26.90,
        image: "https://image.tmdb.org/t/p/w500/wDWAB6w8hQLnL1mR1w4C9v3D13.jpg"
    },
    {
        id: 5,
        title: "Avatar: O Caminho da Água",
        category: "2022 FICÇÃO",
        description: "Retorno a Pandora com novas aventuras",
        rating: 5,
        price: 32.90,
        image: "https://image.tmdb.org/t/p/w500/mbYQLLluS651W89jO7moZcLvM4c.jpg"
    },
    {
        id: 6,
        title: "Oppenheimer",
        category: "2023 BIOGRAFIA",
        description: "A história do pai da bomba atômica",
        rating: 5,
        price: 28.90,
        image: "https://image.tmdb.org/t/p/w500/c0DCmfC7Et2K3d7r5sR2a9mJ87a.jpg"
    },
    {
        id: 7,
        title: "John Wick 4: Baba Yaga",
        category: "2023 AÇÃO",
        description: "O assassino mais letal volta",
        rating: 5,
        price: 30.90,
        image: "https://image.tmdb.org/t/p/w500/rXTqhpkpj6E0Yil3aI3ua2e1m1O.jpg"
    },
    {
        id: 8,
        title: "Duna: Parte 2",
        category: "2024 FICÇÃO",
        description: "A saga continua no deserto de Arrakis",
        rating: 5,
        price: 31.90,
        image: "https://image.tmdb.org/t/p/w500/1m1rXg4I4Xp3i4yB8Lg0A2d276v.jpg"
    },
    {
        id: 9,
        title: "Matrix",
        category: "1999 FICÇÃO",
        description: "A realidade é uma simulação",
        rating: 5,
        price: 19.90,
        image: "https://image.tmdb.org/t/p/w500/lDqMDI3xpbB93TQifon29uILb3o.jpg"
    },
    {
        id: 10,
        title: "O Poderoso Chefão",
        category: "1972 DRAMA",
        description: "O filme de máfia definitivo",
        rating: 5,
        price: 19.90,
        image: "https://image.tmdb.org/t/p/w500/oJagOzBu9Rdd9B42eMffN61iKda.jpg"
    },
    {
        id: 11,
        title: "Gladiador",
        category: "2000 AÇÃO",
        description: "A luta pela honra na Roma Antiga",
        rating: 5,
        price: 18.90,
        image: "https://image.tmdb.org/t/p/w500/bCtap2bItXpI3FzUv22n4p30aDB.jpg"
    },
    {
        id: 12,
        title: "A Origem (Inception )",
        category: "2010 FICÇÃO",
        description: "O roubo dentro dos sonhos",
        rating: 5,
        price: 22.90,
        image: "https://image.tmdb.org/t/p/w500/tN0oNl4I2I3i3b2wP0Vbuv4pDka.jpg"
    }
];

// Dados de filmes para a página inicial
const moviesData = [
    {
        title: "Vingadores: Guerra Infinita",
        category: "2018 AÇÃO",
        description: "Heróis se unem para salvar o mundo de uma ameaça intergaláctica",
        rating: 4,
        image: "https://image.tmdb.org/t/p/w500/89S8Q0n20i2Q0i1L00g6s2a2mF.jpg",
        year: "2018"
    },
    {
        title: "O Impossível",
        category: "2012 DRAMA", 
        description: "Uma história emocionante de sobrevivência e esperança",
        rating: 5,
        image: "https://image.tmdb.org/t/p/w500/dCuf5H5sWjQp2iR9Tz6aI223Nak.jpg",
        year: "2012"
    },
    {
        title: "Blade Runner 2049",
        category: "2017 FICÇÃO",
        description: "Uma jornada épica através de um futuro distópico",
        rating: 4,
        image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBwBfC0AL.jpg",
        year: "2017"
    },
    {
        title: "La La Land: Cantando Estações",
        category: "2016 MUSICAL",
        description: "Um drama tocante sobre sonhos e amor",
        rating: 4,
        image: "https://image.tmdb.org/t/p/w500/52S3oPDqLwD02a43w4V3bA0rmx.jpg",
        year: "2016"
    },
    {
        title: "Mad Max: Estrada da Fúria",
        category: "2015 AÇÃO",
        description: "Aventura cheia de ação com visuais deslumbrantes",
        rating: 5,
        image: "https://image.tmdb.org/t/p/w500/8tNX8s3j1O0eqilOQkuroXw5O0p.jpg",
        year: "2015"
    },
    {
        title: "Parasita",
        category: "2019 SUSPENSE",
        description: "Um thriller envolvente que prende do início ao fim",
        rating: 5,
        image: "https://image.tmdb.org/t/p/w500/igw938inb61v20aYicxNf24I2to.jpg",
        year: "2019"
    },
    {
        title: "Gravidade",
        category: "2013 FICÇÃO",
        description: "Épico espacial com efeitos especiais incríveis",
        rating: 4,
        image: "https://image.tmdb.org/t/p/w500/b22s2OQED3TSs3aK30iPlm24vAl.jpg",
        year: "2013"
    },
    {
        title: "História de um Casamento",
        category: "2019 DRAMA",
        description: "História comovente de amor e separação",
        rating: 4,
        image: "https://image.tmdb.org/t/p/w500/u1wH2bK6ili83wSgA2a22m1zB1E.jpg",
        year: "2019"
    }
];

/**
 * Cria a marcação HTML para a classificação por estrelas.
 * @param {number} rating - A classificação (de 1 a 5 ).
 * @returns {string} O HTML das estrelas.
 */
function createStarRating(rating) {
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= rating;
        starsHTML += `
            <svg class="star ${isFilled ? 'filled' : 'empty'}" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
            </svg>
        `;
    }
    return starsHTML;
}

/**
 * Cria um card de filme ou série genérico.
 * @param {object} item - O objeto filme/série.
 * @param {boolean} isStoreItem - Indica se é um item da loja (com botão de compra).
 * @returns {string} O HTML do card.
 */
function createMediaCard(item, isStoreItem = false) {
    // Define o overlay (botão de play ou de compra)
    const overlayHTML = isStoreItem ? `
        <div class="movie-overlay"></div>
        <div class="movie-buy-overlay">
            <span class="movie-price">R$ ${item.price.toFixed(2)}</span>
            <button class="movie-buy-button" onclick="event.stopPropagation(); addToCart(${item.id})">Comprar</button>
        </div>
    ` : `
        <div class="movie-overlay">
            <button class="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
            </button>
        </div>
    `;

    const onClickAction = isStoreItem ? '' : `onclick="playMovie('${item.title}')"`;

    // Retorna o HTML completo do card, incluindo a seção de informações para todos os tipos
    return `
        <div class="movie-card" ${onClickAction} data-title="${item.title}" data-category="${item.category}" ${isStoreItem ? `data-id="${item.id}"` : ''}>
            <div class="movie-poster">
                <div class="movie-image-container">
                    <img src="${item.image}" alt="${item.title}" class="movie-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="movie-placeholder" style="display: none;">
                        ${item.title.charAt(0)}
                    </div>
                </div>
                ${overlayHTML}
            </div>
            <div class="movie-info">
                <div class="movie-meta">
                    <span class="movie-category">${item.category}</span>
                    <div class="movie-rating">${createStarRating(item.rating)}</div>
                </div>
                <h3 class="movie-title">${item.title}</h3>
            </div>
        </div>
    `;
}

// Funções do carrinho
/**
 * Alterna a visibilidade da barra lateral do carrinho.
 */
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

/**
 * Adiciona um filme ao carrinho.
 * @param {number} movieId - O ID do filme a ser adicionado.
 */
function addToCart(movieId) {
    const movie = storeMovies.find(m => m.id === movieId);
    
    if (movie && !cart.find(item => item.id === movieId)) {
        cart.push(movie);
        updateCart();
        if (!document.getElementById('cartSidebar').classList.contains('open')) {
            toggleCart();
        }
    } else if (cart.find(item => item.id === movieId)) {
        alert('Este filme já está no carrinho!');
    }
}

/**
 * Remove um filme do carrinho.
 * @param {number} movieId - O ID do filme a ser removido.
 */
function removeFromCart(movieId) {
    cart = cart.filter(item => item.id !== movieId);
    updateCart();
}

/**
 * Atualiza a exibição do carrinho na interface do usuário.
 */
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartCount || !cartItems || !cartTotal) return;

    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Seu carrinho está vazio</p>';
        cartTotal.textContent = 'R$ 0,00';
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `R$ ${total.toFixed(2)}`;
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image" 
                     onerror="this.style.display='none';">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remover</button>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Popula uma grade de filmes/séries com os dados fornecidos.
 * @param {string} gridId - O ID do elemento da grade.
 * @param {Array<object>} data - Os dados de filmes/séries.
 * @param {boolean} isStore - Indica se os cards devem ser de loja.
 */
function populateGrid(gridId, data, isStore = false) {
    const grid = document.getElementById(gridId);
    if (grid) {
        grid.innerHTML = data.map(item => createMediaCard(item, isStore)).join('');
        grid.className = 'movies-grid';
    }
}

// Detectar página atual e popular conteúdo apropriado
function detectPageAndPopulate() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            populateGrid('moviesGrid1', moviesData, false);
            break;
        case 'filmes.html':
            populateGrid('moviesGridStore1', storeMovies.slice(0, 4), true);
            populateGrid('moviesGridStore2', storeMovies.slice(4, 8), true);
            populateGrid('moviesGridStore3', storeMovies.slice(8, 12), true);
            break;
    }
    
    updateCart();
}

function playMovie(title) {
    console.log('Reproduzindo:', title);
    alert(`Iniciando reprodução: ${title}`);
}

// Inicialização de todas as funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    detectPageAndPopulate();
});
