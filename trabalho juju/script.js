const moviesData1 = [
    {
        title: "Action",
        category: "2022 SERIES",
        description: "This gratilap meta limemxar. Curter sertggy",
        rating: 4,
        image: "assets/action-movie-1.jpg",
        year: "2022"
    },
    {
        title: "Comegita",
        category: "2023 MOVIE", 
        description: "Tolk watching cort imrae fan. Comater a stly",
        rating: 5,
        image: "assets/thriller-movie-1.jpg",
        year: "2023"
    },
    {
        title: "Sqlammin",
        category: "2024 SERIES",
        description: "You ight stingl mtal atragetion. Romitost alegy",
        rating: 4,
        image: "assets/scifi-movie-1.jpg",
        year: "2024"
    },
    {
        title: "Derring",
        category: "2023 DRAMA",
        description: "Yout glint tae tycror imzasuth peqyood aleggy",
        rating: 3,
        image: "assets/drama-movie-1.jpg",
        year: "2023"
    }
];

const moviesData2 = [
    {
        title: "New Action Film",
        category: "2024 SERIES",
        description: "Latest action-packed adventure with stunning visuals",
        rating: 5,
        image: "assets/action-movie-1.jpg",
        year: "2024"
    },
    {
        title: "Mystery Thriller",
        category: "2024 MOVIE",
        description: "A gripping thriller that will keep you on the edge",
        rating: 4,
        image: "assets/thriller-movie-1.jpg",
        year: "2024"
    },
    {
        title: "Space Epic",
        category: "2024 SERIES",
        description: "Epic space adventure with incredible special effects",
        rating: 5,
        image: "assets/scifi-movie-1.jpg",
        year: "2024"
    },
    {
        title: "Romantic Drama",
        category: "2024 DRAMA",
        description: "A heartwarming story of love and redemption",
        rating: 4,
        image: "assets/drama-movie-1.jpg",
        year: "2024"
    }
];

// Create star rating HTML
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

// Create movie card HTML with better image handling
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

// Populate movie grids
function populateMovies() {
    const grid1 = document.getElementById('moviesGrid1');
    const grid2 = document.getElementById('moviesGrid2');
    
    if (grid1) {
        grid1.innerHTML = moviesData1.map(movie => createMovieCard(movie)).join('');
    }
    
    if (grid2) {
        grid2.innerHTML = moviesData2.map(movie => createMovieCard(movie)).join('');
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-section .btn-primary');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            // Simple search implementation
            const allMovies = [...moviesData1, ...moviesData2];
            const results = allMovies.filter(movie => 
                movie.title.toLowerCase().includes(query) ||
                movie.category.toLowerCase().includes(query) ||
                movie.description.toLowerCase().includes(query)
            );
            
            // Show search results (you can expand this)
            console.log('Search results:', results);
            alert(`Found ${results.length} results for "${query}"`);
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
        
        // Real-time search suggestions (optional)
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            if (query.length > 2) {
                // You can implement live suggestions here
                console.log('Searching for:', query);
            }
        });
    }
}

// Movie interaction functions
function playMovie(title) {
    // Play movie functionality
    console.log('Playing movie:', title);
    alert(`Now playing: ${title}`);
    
    // You can add more sophisticated video player logic here
    // For example, open a modal with video player, update viewing history, etc.
}

function addToFavorites() {
    console.log('Added to favorites');
    alert('Added to your favorites!');
    
    // You can implement favorites functionality here
    // For example, save to localStorage, update UI, etc.
}

// Smooth scrolling for navigation
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

// Header scroll effect
function setupHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove background opacity based on scroll
        if (currentScroll > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        }
        
        // Hide/show header on scroll (optional)
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize loading animation
function showLoadingAnimation() {
    // Add loading states to movie cards
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

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Press 'S' to focus search
        if (e.key === 's' || e.key === 'S') {
            if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }
        }
        
        // Press 'Escape' to clear search
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('searchInput');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.blur();
                searchInput.value = '';
            }
        }
    });
}

// Intersection Observer for animations
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
    
    // Observe content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Metix streaming site loaded!');
    
    // Initialize all functionality
    populateMovies();
    setupSearch();
    setupSmoothScrolling();
    setupHeaderEffects();
    setupKeyboardShortcuts();
    setupScrollAnimations();
    
    // Show loading animation after a brief delay
    setTimeout(showLoadingAnimation, 100);
    
    // Log some stats
    console.log(`Loaded ${moviesData1.length + moviesData2.length} movies`);
});

// Additional utility functions
function toggleTheme() {
    // Theme switching functionality (if needed)
    document.body.classList.toggle('light-theme');
}

function shareMovie(title) {
    // Social sharing functionality
    if (navigator.share) {
        navigator.share({
            title: `Watch ${title} on Metix`,
            text: `Check out this amazing movie: ${title}`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers without Web Share API
        const shareText = `Check out ${title} on Metix! ${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

// Performance monitoring
function trackPerformance() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}

// Initialize performance tracking
trackPerformance();