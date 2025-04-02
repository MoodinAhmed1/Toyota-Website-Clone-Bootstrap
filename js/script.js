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
                    <img src="${vehicle.image}" alt="${vehicle.name}">
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
});
