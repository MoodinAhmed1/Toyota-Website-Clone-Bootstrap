// Vehicle data
const vehicles = [
    { 
        year: "2024", 
        name: "Tacoma", 
        tagline: "Redefine your limits.", 
        price: "$31,590", 
        image: "https://toyotacanada.scene7.com/is/image/toyotacanada/20_Tacoma_TRD_Off-Road_Cement_1?ts=1688694123022&$Media-Large$&dpr=off" 
    },
    { 
        year: "2024", 
        name: "Tundra", 
        tagline: "Take on the toughest demands.", 
        price: "$40,090", 
        image: "https://images.customwheeloffset.com/web-compressed/936421-1-2020-tundra-toyota-bulletproof-lifted-12in-american-truxx-dna-custom.jpg" 
    },
    { 
        year: "2024", 
        name: "RAV4", 
        tagline: "Adventure awaits.", 
        price: "$28,350", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg/330px-2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg" 
    },
    { 
        year: "2024", 
        name: "Camry", 
        tagline: "The best never rests.", 
        price: "$26,420", 
        image: "https://global.toyota/pages/models/images/20191018/kv/camry_w1920_01.jpg" 
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("vehicleCarousel");
    const inner = carousel.querySelector(".carousel-inner");
    
    // Generate slides
    inner.innerHTML = vehicles.map((vehicle, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="vehicle-card">
                <div class="card-img-container">
                    <img src="${vehicle.image}" alt="${vehicle.name}" class="d-block w-100">
                </div>
                <div class="card-body">
                    <h3>${vehicle.year} ${vehicle.name}</h3>
                    <p class="text-muted">${vehicle.tagline}</p>
                    <h4 class="text-danger">${vehicle.price}</h4>
                    <button class="btn btn-danger w-100 mt-2">View Details</button>
                </div>
            </div>
        </div>
    `).join("");
    
    // Only add custom scroll for desktop
    if (window.matchMedia("(min-width: 768px)").matches) {
        setupDesktopScroll();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            if (!carousel.querySelector('.custom-prev')) {
                setupDesktopScroll();
            }
        } else {
            // Ensure Bootstrap carousel is properly initialized
            if (typeof bootstrap !== 'undefined') {
                new bootstrap.Carousel(carousel);
            }
        }
    });
    
    function setupDesktopScroll() {
        // Remove Bootstrap carousel functionality
        carousel.removeAttribute('data-bs-ride');
        
        const inner = carousel.querySelector(".carousel-inner");
        
        // Add custom navigation buttons
        const prevBtn = document.createElement('div');
        prevBtn.className = 'custom-scroll-control custom-prev';
        prevBtn.innerHTML = '❮';
        
        const nextBtn = document.createElement('div');
        nextBtn.className = 'custom-scroll-control custom-next';
        nextBtn.innerHTML = '❯';
        
        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);
        
        // Update button visibility
        const updateButtons = () => {
            const maxScroll = inner.scrollWidth - inner.clientWidth;
            prevBtn.style.display = inner.scrollLeft > 10 ? 'flex' : 'none';
            nextBtn.style.display = inner.scrollLeft < maxScroll - 10 ? 'flex' : 'none';
        };
        
        // Navigation handlers
        nextBtn.addEventListener('click', () => {
            inner.scrollBy({
                left: inner.clientWidth * 0.8,
                behavior: 'smooth'
            });
        });
        
        prevBtn.addEventListener('click', () => {
            inner.scrollBy({
                left: -inner.clientWidth * 0.8,
                behavior: 'smooth'
            });
        });
        
        // Initial setup
        updateButtons();
        inner.addEventListener('scroll', updateButtons);
    }
});
