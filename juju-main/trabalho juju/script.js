const moviesData1 = [
    {
        title: "Vingadores",
        category: "2022 AÇÃO",
        description: "Heróis se unem para salvar o mundo de uma ameaça intergaláctica",
        rating: 4,
        image: "assets/action-movie-1.jpg",
        year: "2022"
    },
    {
        title: "O Impossível",
        category: "2023 FILME", 
        description: "Uma história emocionante de sobrevivência e esperança",
        rating: 5,
        image: "assets/thriller-movie-1.jpg",
        year: "2023"
    },
    {
        title: "Cosmos",
        category: "2024 SÉRIE",
        description: "Uma jornada épica através do universo desconhecido",
        rating: 4,
        image: "assets/scifi-movie-1.jpg",
        year: "2024"
    },
    {
        title: "Coração",
        category: "2023 DRAMA",
        description: "Um drama tocante sobre família e perdão",
        rating: 3,
        image: "assets/drama-movie-1.jpg",
        year: "2023"
    }
];

const moviesData2 = [
    {
        title: "Adrenalina Total",
        category: "2024 SÉRIE",
        description: "Aventura cheia de ação com visuais deslumbrantes",
        rating: 5,
        image: "assets/action-movie-1.jpg",
        year: "2024"
    },
    {
        title: "Mistério Sombrio",
        category: "2024 FILME",
        description: "Um thriller envolvente que prende do início ao fim",
        rating: 4,
        image: "assets/thriller-movie-1.jpg",
        year: "2024"
    },
    {
        title: "Galáxias Distantes",
        category: "2024 SÉRIE",
        description: "Épico espacial com efeitos especiais incríveis",
        rating: 5,
        image: "assets/scifi-movie-1.jpg",
        year: "2024"
    },
    {
        title: "Amor Verdadeiro",
        category: "2024 DRAMA",
        description: "História comovente de amor e redenção",
        rating: 4,
        image: "assets/drama-movie-1.jpg",
        year: "2024"
    }
];

// Dados específicos para a página de séries
const seriesData1 = [
    {
        title: "Stranger Things",
        category: "FICÇÃO CIENTÍFICA",
        description: "Aventuras sobrenaturais em uma pequena cidade americana",
        rating: 5,
        image: "assets/stranger-things.jpg",
        year: "2024"
    },
    {
        title: "Breaking Bad",
        category: "DRAMA CRIMINAL",
        description: "A transformação de um professor em traficante",
        rating: 5,
        image: "assets/breaking-bad.jpg",
        year: "2023"
    },
    {
        title: "The Crown",
        category: "DRAMA HISTÓRICO",
        description: "A vida da família real britânica",
        rating: 4,
        image: "assets/the-crown.jpg",
        year: "2024"
    },
    {
        title: "Friends",
        category: "COMÉDIA",
        description: "As aventuras de seis amigos em Nova York",
        rating: 5,
        image: "assets/friends.jpg",
        year: "2023"
    }
];

const seriesData2 = [
    {
        title: "House of Dragons",
        category: "FANTASIA",
        description: "Dragões e política no mundo de Westeros",
        rating: 4,
        image: "assets/house-dragons.jpg",
        year: "2024"
    },
    {
        title: "The Witcher",
        category: "FANTASIA",
        description: "As aventuras do caçador de monstros Geralt",
        rating: 4,
        image: "assets/witcher.jpg",
        year: "2024"
    },
    {
        title: "Euphoria",
        category: "DRAMA",
        description: "A vida de adolescentes modernos",
        rating: 4,
        image: "assets/euphoria.jpg",
        year: "2024"
    },
    {
        title: "Wednesday",
        category: "COMÉDIA SOMBRIA",
        description: "A filha mais sombria da Família Addams",
        rating: 5,
        image: "assets/wednesday.jpg",
        year: "2024"
    }
];

const seriesData3 = [
    {
        title: "3%",
        category: "FICÇÃO CIENTÍFICA BR",
        description: "Distopia brasileira sobre seleção social",
        rating: 4,
        image: "assets/3-percent.jpg",
        year: "2023"
    },
    {
        title: "Cidade Invisível",
        category: "FANTASIA BR",
        description: "Folclore brasileiro em forma de thriller",
        rating: 4,
        image: "assets/cidade-invisivel.jpg",
        year: "2024"
    },
    {
        title: "Coisa Mais Linda",
        category: "DRAMA BR",
        description: "Bossa nova e empoderamento feminino nos anos 60",
        rating: 4,
        image: "assets/coisa-mais-linda.jpg",
        year: "2023"
    },
    {
        title: "Sintonia",
        category: "DRAMA BR",
        description: "Jovens da periferia de São Paulo",
        rating: 4,
        image: "assets/sintonia.jpg",
        year: "2024"
    }
];

// Criar classificação por estrelas
function createStarRating(rating) {
    let starsHTML = '';
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

// Criar card de filme/série
function createMovieCard(movie) {
    return `
        <div class="movie-card" onclick="playMovie('${movie.title}')" data-title="${movie.title}" data-category="${movie.category}">
            <div class="movie-poster">
                <div class="movie-image-container">
                    <img src="${movie.image}" alt="${movie.title}" class="movie-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="movie-placeholder" style="display: none;">
                        ${movie.title.charAt(0)}
                    </div>
                </div>
                <div class="movie-overlay"></div>
                <button class="play-button" onclick="event.stopPropagation(); playMovie('${movie.title}')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21"></polygon>
                    </svg>
                </button>
            </div>
            
            <div class="movie-info">
                <div class="movie-meta">
                    <span class="movie-category">${movie.category}</span>
                    <div class="movie-rating">
                        ${createStarRating(movie.rating)}
                    </div>
                </div>
                
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-description">${movie.description}</p>
                ${movie.year ? `<span class="movie-year">${movie.year}</span>` : ''}
            </div>
        </div>
    `;
}

// Detectar página atual e popular conteúdo apropriado
function detectPageAndPopulate() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            populateHomePage();
            break;
        case 'series.html':
            populateSeriesPage();
            break;
        case 'monthly.html':
            populateMonthlyPage();
            break;
        case 'quarterly.html':
            populateQuarterlyPage();
            break;
        default:
            populateHomePage();
    }
}

// Popular página inicial
function populateHomePage() {
    const grid1 = document.getElementById('moviesGrid1');
    const grid2 = document.getElementById('moviesGrid2');
    
    if (grid1) {
        grid1.innerHTML = moviesData1.map(movie => createMovieCard(movie)).join('');
        grid1.className = 'movies-grid';
    }
    
    if (grid2) {
        grid2.innerHTML = moviesData2.map(movie => createMovieCard(movie)).join('');
        grid2.className = 'movies-grid';
    }
}

// Popular página de séries
function populateSeriesPage() {
    const grid1 = document.getElementById('seriesGrid1');
    const grid2 = document.getElementById('seriesGrid2');
    const grid3 = document.getElementById('seriesGrid3');
    
    if (grid1) {
        grid1.innerHTML = seriesData1.map(series => createMovieCard(series)).join('');
        grid1.className = 'movies-grid';
    }
    
    if (grid2) {
        grid2.innerHTML = seriesData2.map(series => createMovieCard(series)).join('');
        grid2.className = 'movies-grid';
    }
    
    if (grid3) {
        grid3.innerHTML = seriesData3.map(series => createMovieCard(series)).join('');
        grid3.className = 'movies-grid';
    }
}

// Popular página mensal
function populateMonthlyPage() {
    // Adicionar estilos específicos para página de preços
    addPricingStyles();
}

// Popular página trimestral
function populateQuarterlyPage() {
    // Adicionar estilos específicos para página de preços
    addPricingStyles();
}

// Adicionar estilos para páginas de preços
function addPricingStyles() {
    if (!document.querySelector('#pricing-styles')) {
        const styles = document.createElement('style');
        styles.id = 'pricing-styles';
        styles.textContent = `
            .pricing-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
                max-width: 600px;
                margin: 0 auto;
            }
            
            .pricing-grid.comparison {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                max-width: 800px;
            }
            
            .pricing-card {
                background: var(--card);
                border: 1px solid var(--border);
                border-radius: var(--radius);
                padding: 2rem;
                text-align: center;
                position: relative;
                transition: var(--transition-smooth);
            }
            
            .pricing-card.featured {
                border-color: var(--primary);
                box-shadow: 0 0 20px rgba(255, 0, 0, 0.2);
            }
            
            .pricing-badge {
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--primary);
                color: var(--primary-foreground);
                padding: 0.5rem 1rem;
                border-radius: var(--radius);
                font-size: 0.875rem;
                font-weight: 600;
            }
            
            .pricing-header h3 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            
            .price {
                display: flex;
                align-items: baseline;
                justify-content: center;
                margin-bottom: 1rem;
            }
            
            .currency {
                font-size: 1.25rem;
                color: var(--muted-foreground);
            }
            
            .amount {
                font-size: 3rem;
                font-weight: bold;
                color: var(--primary);
                margin: 0 0.25rem;
            }
            
            .period {
                font-size: 1rem;
                color: var(--muted-foreground);
            }
            
            .total-cost, .savings {
                font-size: 0.875rem;
                color: var(--muted-foreground);
                margin-bottom: 1.5rem;
            }
            
            .savings {
                color: var(--primary);
                font-weight: 600;
            }
            
            .pricing-features {
                text-align: left;
                margin: 2rem 0;
            }
            
            .feature {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                margin-bottom: 0.75rem;
                font-size: 0.875rem;
            }
            
            .feature.highlight {
                color: var(--primary);
                font-weight: 600;
            }
            
            .check-icon {
                color: var(--primary);
                flex-shrink: 0;
            }
            
            .pricing-btn {
                width: 100%;
                margin-top: 1rem;
            }
            
            .payment-methods {
                margin-top: 3rem;
                text-align: center;
            }
            
            .payment-methods h3 {
                margin-bottom: 1rem;
                color: var(--muted-foreground);
            }
            
            .payment-icons {
                display: flex;
                justify-content: center;
                gap: 1rem;
                flex-wrap: wrap;
            }
            
            .payment-icon {
                background: var(--card);
                border: 1px solid var(--border);
                padding: 0.75rem 1rem;
                border-radius: var(--radius);
                font-size: 0.875rem;
            }
            
            .faq-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
                margin-top: 2rem;
            }
            
            .faq-item {
                background: var(--card);
                padding: 1.5rem;
                border-radius: var(--radius);
                border: 1px solid var(--border);
            }
            
            .faq-item h4 {
                margin-bottom: 0.75rem;
                color: var(--foreground);
            }
            
            .faq-item p {
                color: var(--muted-foreground);
                line-height: 1.6;
            }
            
            .savings-highlight {
                background: linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(128, 0, 128, 0.1));
                border: 1px solid var(--primary);
                border-radius: var(--radius);
                padding: 2rem;
                text-align: center;
                margin-top: 2rem;
            }
            
            .benefits-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-top: 2rem;
            }
            
            .benefit-card {
                background: var(--card);
                padding: 1.5rem;
                border-radius: var(--radius);
                text-align: center;
                border: 1px solid var(--border);
                transition: var(--transition-smooth);
            }
            
            .benefit-card:hover {
                border-color: var(--primary);
                transform: translateY(-2px);
            }
            
            .benefit-icon {
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            
            .benefit-card h4 {
                margin-bottom: 0.75rem;
            }
            
            .plan-comparison {
                background: var(--card);
                border-radius: var(--radius);
                padding: 1rem;
            }
            
            .plan-item {
                padding: 1rem;
                margin-bottom: 1rem;
                border-radius: calc(var(--radius) - 2px);
                border: 1px solid var(--border);
            }
            
            .plan-item.current {
                border-color: var(--primary);
                background: rgba(255, 0, 0, 0.1);
            }
            
            .plan-price {
                font-size: 1.25rem;
                font-weight: bold;
                color: var(--primary);
                margin: 0.5rem 0;
            }
            
            .guarantee-card, .offer-card, .testimonial-card, .calculator-card {
                background: var(--card);
                border: 1px solid var(--border);
                border-radius: var(--radius);
                padding: 1.5rem;
            }
            
            .offer-badge {
                background: var(--primary);
                color: var(--primary-foreground);
                padding: 0.25rem 0.75rem;
                border-radius: var(--radius);
                font-size: 0.75rem;
                display: inline-block;
                margin-bottom: 0.75rem;
            }
            
            .calc-item {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.75rem;
                padding-bottom: 0.75rem;
                border-bottom: 1px solid var(--border);
            }
            
            .calc-savings {
                display: flex;
                justify-content: space-between;
                font-weight: bold;
                margin-top: 1rem;
                padding-top: 1rem;
                border-top: 2px solid var(--primary);
            }
            
            .savings-amount {
                color: var(--primary);
            }
            
            .testimonial-card p {
                font-style: italic;
                margin-bottom: 1rem;
            }
            
            .testimonial-author {
                color: var(--muted-foreground);
                text-align: right;
            }
            
            .support-item {
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid var(--border);
            }
            
            .support-item:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }
        `;
        document.head.appendChild(styles);
    }
}

// Funcionalidade de busca
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-section .btn-primary');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            const allContent = [...moviesData1, ...moviesData2, ...seriesData1, ...seriesData2, ...seriesData3];
            const results = allContent.filter(item => 
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
            );
            
            console.log('Resultados da busca:', results);
            alert(`Encontrados ${results.length} resultados para "${query}"`);
        }
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            if (query.length > 2) {
                console.log('Pesquisando por:', query);
            }
        });
    }
}

// Funções de interação
function playMovie(title) {
    console.log('Reproduzindo:', title);
    alert(`Iniciando reprodução: ${title}`);
}

function addToFavorites() {
    console.log('Adicionado aos favoritos');
    alert('Adicionado aos seus favoritos!');
}

function subscribe(plan) {
    const planNames = {
        monthly: 'Mensal (R$ 19,90/mês)',
        quarterly: 'Trimestral (R$ 49,90/3 meses)'
    };
    
    console.log('Assinatura:', plan);
    alert(`Redirecionando para checkout do plano ${planNames[plan]}`);
}

function showFeatures() {
    alert('Todos os recursos:\n• Acesso ilimitado\n• 4K Ultra HD\n• 4 telas simultâneas\n• Downloads offline\n• Sem anúncios');
}

function comparePromotion() {
    alert('Economia do Plano Trimestral:\n• Mensal: R$ 59,70 (3x R$ 19,90)\n• Trimestral: R$ 49,90\n• Você economiza: R$ 9,80 (16% de desconto)');
}

// Navegação suave
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efeitos do header
function setupHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        }
        
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Animação de carregamento
function showLoadingAnimation() {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Atalhos de teclado
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 's' || e.key === 'S') {
            if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }
        }
        
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('searchInput');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.blur();
                searchInput.value = '';
            }
        }
    });
}

// Animações de scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
}

// Destacar link ativo na navegação
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (
            (currentPage === 'index.html' || currentPage === '') && link.textContent === 'Início' ||
            currentPage === 'series.html' && link.textContent === 'Séries' ||
            currentPage === 'monthly.html' && link.textContent === 'Mensal' ||
            currentPage === 'quarterly.html' && link.textContent === 'Trimestral'
        ) {
            link.classList.add('active');
        }
    });
}

// Compartilhar conteúdo
function shareMovie(title) {
    if (navigator.share) {
        navigator.share({
            title: `Assista ${title} no Metix`,
            text: `Confira este conteúdo incrível: ${title}`,
            url: window.location.href
        });
    } else {
        const shareText = `Confira ${title} no Metix! ${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

// Monitoramento de performance
function trackPerformance() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Página carregada em ${pageLoadTime}ms`);
        }, 0);
    });
}

// Inicializar tudo quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site Metix carregado!');
    
    // Detectar página e popular conteúdo
    detectPageAndPopulate();
    
    // Inicializar funcionalidades
    setupSearch();
    setupSmoothScrolling();
    setupHeaderEffects();
    setupKeyboardShortcuts();
    setupScrollAnimations();
    highlightActiveNav();
    
    // Animação de carregamento
    setTimeout(showLoadingAnimation, 100);
    
    // Stats
    const totalContent = moviesData1.length + moviesData2.length + seriesData1.length + seriesData2.length + seriesData3.length;
    console.log(`${totalContent} conteúdos carregados`);
});

// Inicializar tracking de performance
trackPerformance();