  // --- 1. THE DATA ---
        const products = [
            // GRAPHICS CARDS
            { id: 1, type: "GPU", name: "NVIDIA RTX 5090", brand: "ASUS ROG", price: "$1,999", img: "placeholder", specs: ["VRAM: 32GB GDDR7", "Boost Clock: 3.1 GHz", "Architecture: Blackwell", "Power: 600W"] },
            { id: 2, type: "GPU", name: "NVIDIA RTX 5080", brand: "MSI Gaming", price: "$1,199", img: "placeholder", specs: ["VRAM: 24GB GDDR7", "Boost Clock: 2.9 GHz", "Architecture: Blackwell", "Power: 450W"] },
            { id: 3, type: "GPU", name: "NVIDIA RTX 5070", brand: "Gigabyte Eagle", price: "$799", img: "placeholder", specs: ["VRAM: 16GB GDDR7", "Boost Clock: 2.8 GHz", "Architecture: Blackwell", "Power: 280W"] },
            { id: 4, type: "GPU", name: "NVIDIA RTX 4090", brand: "NVIDIA FE", price: "$1,699", img: "placeholder", specs: ["VRAM: 24GB GDDR6X", "Boost Clock: 2.5 GHz", "Architecture: Lovelace", "Power: 450W"] },
            { id: 5, type: "GPU", name: "NVIDIA RTX 4080 Super", brand: "Zotac", price: "$999", img: "placeholder", specs: ["VRAM: 16GB GDDR6X", "Boost Clock: 2.55 GHz", "Architecture: Lovelace", "Power: 320W"] },
            { id: 6, type: "GPU", name: "NVIDIA RTX 4070 Ti", brand: "PNY", price: "$799", img: "placeholder", specs: ["VRAM: 12GB GDDR6X", "Boost Clock: 2.6 GHz", "Architecture: Lovelace", "Power: 285W"] },

            // CPUs
            { id: 7, type: "CPU", name: "Intel Core i9-14900K", brand: "Intel", price: "$589", img: "placeholder", specs: ["Cores: 24 (8P + 16E)", "Speed: Up to 6.0 GHz", "Socket: LGA1700", "TDP: 125W"] },
            { id: 8, "type": "CPU", name: "Intel Core i7-14700K", brand: "Intel", price: "$409", img: "placeholder", specs: ["Cores: 20 (8P + 12E)", "Speed: Up to 5.6 GHz", "Socket: LGA1700", "TDP: 125W"] },
            { id: 9, "type": "CPU", name: "Intel Core i5-13400F", brand: "Intel", price: "$209", img: "placeholder", specs: ["Cores: 10 (6P + 4E)", "Speed: Up to 4.6 GHz", "Socket: LGA1700", "TDP: 65W"] },
            { id: 10, type: "CPU", name: "AMD Ryzen 9 7950X3D", brand: "AMD", price: "$599", img: "placeholder", specs: ["Cores: 16", "Speed: Up to 5.7 GHz", "Cache: 128MB L3", "TDP: 120W"] },
            { id: 11, type: "CPU", name: "AMD Ryzen 7 7800X3D", brand: "AMD", price: "$399", img: "placeholder", specs: ["Cores: 8", "Speed: Up to 5.0 GHz", "Best Gaming CPU: Yes", "TDP: 120W"] },
            { id: 12, type: "CPU", name: "AMD Ryzen 5 7600", brand: "AMD", price: "$229", img: "placeholder", specs: ["Cores: 6", "Speed: Up to 5.1 GHz", "Socket: AM5", "TDP: 65W"] },

            // MOTHERBOARDS
            { id: 13, type: "Mobo", name: "ASUS ROG Maximus Z790", brand: "Intel Chipset", price: "$699", img: "placeholder", specs: ["Socket: LGA1700", "Form: E-ATX", "DDR5 Support: Yes", "WiFi: 7 Ready"] },
            { id: 14, type: "Mobo", name: "MSI MAG B760 Tomahawk", brand: "Intel Chipset", price: "$189", img: "placeholder", specs: ["Socket: LGA1700", "Form: ATX", "DDR5 Support: Yes", "WiFi: 6E"] },
            { id: 15, type: "Mobo", name: "Gigabyte H610M", brand: "Intel Chipset", price: "$89", img: "placeholder", specs: ["Socket: LGA1700", "Form: mATX", "DDR4 Support: Yes", "Budget Friendly: Yes"] },
            { id: 16, type: "Mobo", name: "ASRock X670E Taichi", brand: "AMD Chipset", price: "$499", img: "placeholder", specs: ["Socket: AM5", "Form: E-ATX", "PCIe: 5.0", "DDR5 Only: Yes"] },
            { id: 17, type: "Mobo", name: "Gigabyte B650 Aorus Elite", brand: "AMD Chipset", price: "$219", img: "placeholder", specs: ["Socket: AM5", "Form: ATX", "WiFi: 6E", "Best Value: Yes"] },
            { id: 18, type: "Mobo", name: "MSI PRO A620M", brand: "AMD Chipset", price: "$85", img: "placeholder", specs: ["Socket: AM5", "Form: mATX", "Features: Basic", "DDR5 Support: Yes"] },

             // CASES
            { id: 19, type: "Case", name: "Lian Li O11 Dynamic EVO", brand: "Lian Li", price: "$159", img: "placeholder", specs: ["Type: Mid Tower", "Glass: Dual Chamber", "Fans Included: 0", "Color: Black/White"] },
            { id: 20, type: "Case", name: "Corsair 4000D Airflow", brand: "Corsair", price: "$104", img: "placeholder", specs: ["Type: Mid Tower", "Airflow: High", "Fans Included: 2", "Cable Mgmt: Excellent"] },
            { id: 21, type: "Case", name: "NZXT H5 Flow", brand: "NZXT", price: "$94", img: "placeholder", specs: ["Type: Compact ATX", "Feature: Toilet Fan", "Style: Minimalist", "Airflow: Focused"] },
            { id: 22, type: "Case", name: "Fractal Design North", brand: "Fractal", price: "$139", img: "placeholder", specs: ["Type: Mid Tower", "Front: Real Wood", "Style: Elegant", "Mesh: Fine"] },
            { id: 23, type: "Case", name: "Cooler Master Q300L", brand: "Cooler Master", price: "$39", img: "placeholder", specs: ["Type: Micro-ATX", "Budget: Entry Level", "Pattern: Magnetic", "Size: Small"] },
            { id: 24, type: "Case", name: "Phanteks NV7", brand: "Phanteks", price: "$219", img: "placeholder", specs: ["Type: Full Tower", "Showcase: Yes", "RGB: Integrated", "Size: Massive"] },

            // PSU
            { id: 25, type: "PSU", name: "Corsair RM1000x", brand: "Corsair", price: "$189", img: "placeholder", specs: ["Wattage: 1000W", "Efficiency: 80+ Gold", "Modular: Fully", "Warranty: 10 Years"] },
            { id: 26, type: "PSU", name: "Seasonic Vertex GX-1200", brand: "Seasonic", price: "$239", img: "placeholder", specs: ["Wattage: 1200W", "Standard: ATX 3.0", "Cable: 12VHPWR Ready", "Efficiency: Gold"] },
            { id: 27, type: "PSU", name: "MSI MAG A850GL", brand: "MSI", price: "$109", img: "placeholder", specs: ["Wattage: 850W", "Standard: PCIe 5.0", "Size: Compact", "Efficiency: Gold"] },
            { id: 28, type: "PSU", name: "EVGA 700 GD", brand: "EVGA", price: "$79", img: "placeholder", specs: ["Wattage: 700W", "Efficiency: 80+ Gold", "Modular: Non-Modular", "Reliability: High"] },
            { id: 29, type: "PSU", name: "Thermaltake Smart 600W", brand: "Thermaltake", price: "$45", img: "placeholder", specs: ["Wattage: 600W", "Efficiency: 80+ White", "Budget: Entry", "RGB: No"] },
            { id: 30, type: "PSU", name: "Be Quiet! Dark Power 13", brand: "Be Quiet!", price: "$289", img: "placeholder", specs: ["Wattage: 1000W", "Efficiency: 80+ Titanium", "Noise: Silent", "Top Tier: Yes"] },

            // RAM
            { id: 31, type: "RAM", name: "G.Skill Trident Z5 RGB", brand: "G.Skill", price: "$119", img: "placeholder", specs: ["Capacity: 32GB (2x16)", "Speed: DDR5-6000", "Latency: CL30", "RGB: Yes"] },
            { id: 32, type: "RAM", name: "Corsair Vengeance", brand: "Corsair", price: "$99", img: "placeholder", specs: ["Capacity: 32GB (2x16)", "Speed: DDR5-5600", "Latency: CL36", "Profile: Low"] },
            { id: 33, type: "RAM", name: "TeamGroup Delta RGB", brand: "TeamGroup", price: "$105", img: "placeholder", specs: ["Capacity: 32GB (2x16)", "Speed: DDR5-6000", "Aesthetic: White/Black", "RGB: Wide Angle"] },
            { id: 34, type: "RAM", name: "Kingston Fury Beast", brand: "Kingston", price: "$59", img: "placeholder", specs: ["Capacity: 16GB (2x8)", "Speed: DDR5-5200", "Budget: Entry", "Heatsink: Basic"] },
            { id: 35, type: "RAM", name: "Corsair Vengeance LPX", brand: "Corsair", price: "$44", img: "placeholder", specs: ["Capacity: 16GB (2x8)", "Speed: DDR4-3200", "Compatibility: Legacy", "Height: Low"] },
            { id: 36, type: "RAM", name: "G.Skill Royal Elite", brand: "G.Skill", price: "$159", img: "placeholder", specs: ["Capacity: 32GB", "Look: Crystalline", "Speed: DDR4-3600", "Luxury: Yes"] },

            // STORAGE
            { id: 37, type: "Storage", name: "Samsung 990 Pro", brand: "Samsung", price: "$169", img: "placeholder", specs: ["Size: 2TB", "Type: NVMe Gen4", "Read Speed: 7450 MB/s", "Write Speed: 6900 MB/s"] },
            { id: 38, type: "Storage", name: "WD Black SN850X", brand: "Western Digital", price: "$159", img: "placeholder", specs: ["Size: 2TB", "Type: NVMe Gen4", "Feature: Gaming Mode", "Speed: Top Tier"] },
            { id: 39, type: "Storage", name: "Crucial P3 Plus", brand: "Crucial", price: "$119", img: "placeholder", specs: ["Size: 2TB", "Type: NVMe Gen4", "Value: Best", "Read Speed: 5000 MB/s"] },
            { id: 40, type: "Storage", name: "Kingston NV2", brand: "Kingston", price: "$60", img: "placeholder", specs: ["Size: 1TB", "Type: NVMe Gen4", "Budget: Entry", "Speed: 3500 MB/s"] },
            { id: 41, type: "Storage", name: "Samsung 870 EVO", brand: "Samsung", price: "$89", img: "placeholder", specs: ["Size: 1TB", "Type: SATA SSD", "Format: 2.5 Inch", "Reliability: High"] },
            { id: 42, type: "Storage", name: "Crucial MX500", brand: "Crucial", price: "$55", img: "placeholder", specs: ["Size: 500GB", "Type: SATA SSD", "Format: 2.5 Inch", "Value: Classic"] }
        ];

        // --- 2. ICON MAP ---
        const category_icons = {
            'GPU': '🎮', 
            'CPU': '🧠', 
            'Mobo': '🔌',
            'Case': '💻',
            'PSU': '⚡',
            'RAM': '💾',
            'Storage': '💿' 
        };

        // --- 3. HELPER: GET CSS COLOR VARIABLES BY TYPE ---
        function getCategoryColorVar(type) {
             switch(type) {
                case 'GPU': return 'var(--col-gpu)';
                case 'CPU': return 'var(--col-cpu)';
                case 'Mobo': return 'var(--col-mobo)';
                case 'Case': return 'var(--col-case)';
                case 'PSU': return 'var(--col-psu)';
                case 'RAM': return 'var(--col-ram)';
                case 'Storage': return 'var(--col-storage)';
                default: return '#fff';
            }
        }

        function getCategoryClass(type) {
            switch(type) {
                case 'GPU': return 'cat-gpu';
                case 'CPU': return 'cat-cpu';
                case 'Mobo': return 'cat-mobo';
                case 'Case': return 'cat-case';
                case 'PSU': return 'cat-psu';
                case 'RAM': return 'cat-ram';
                case 'Storage': return 'cat-storage';
                default: return '';
            }
        }

        // --- 4. RENDER FUNCTIONS ---
        
        // Function to display the Main Hero Product
        function loadMainProduct(product) {
            const heroContainer = document.getElementById('main-display');
            const catClass = getCategoryClass(product.type);
            const icon = category_icons[product.type] || '❓';

            // Apply the base class AND the specific category class
            heroContainer.className = `product-hero ${catClass}`;
            
            // --- PARSING SPECS IMPROVEMENT ---
            // Parsing strings like "VRAM: 32GB" into Label: "VRAM", Value: "32GB"
            let specsHTML = product.specs.map(spec => {
                let label = "Feature";
                let value = spec;
                
                if(spec.includes(':')) {
                    const parts = spec.split(':');
                    label = parts[0].trim();
                    value = parts.slice(1).join(':').trim(); // Join back in case there are multiple colons
                }

                return `<li><span class="spec-label">${label}</span><span class="spec-value">${value}</span></li>`;
            }).join('');

            // Force restart animation
            heroContainer.style.animation = 'none';
            heroContainer.offsetHeight; 
            heroContainer.style.animation = null; 

            heroContainer.innerHTML = `
                <div class="product-image-box">
                    ${icon} </div>
                <div class="product-info">
                    <span class="brand">${product.brand} - ${product.type}</span>
                    <h1>${product.name}</h1>
                    <div class="price">${product.price}</div>
                    
                    <ul class="specs-list">
                        ${specsHTML}
                    </ul>

                    <div class="action-buttons">
                        <button class="btn btn-buy">Buy Now</button>
                        <button class="btn btn-contact">Contact Sales</button>
                    </div>
                </div>
            `;
        }

        // Function to display the "Similar Products" GROUPED BY CATEGORY
        function loadSimilarProducts(currentId) {
            const mainContainer = document.getElementById('similar-grid-container');
            mainContainer.innerHTML = ''; 

            // 1. Filter out current product
            const similar = products.filter(p => p.id !== currentId);

            // 2. Group products by Type
            const groupedProducts = {};
            similar.forEach(p => {
                if(!groupedProducts[p.type]) {
                    groupedProducts[p.type] = [];
                }
                groupedProducts[p.type].push(p);
            });

            // 3. Define the order of categories (Optional, prevents random jumping)
            const catOrder = ['GPU', 'CPU', 'Mobo', 'RAM', 'Storage', 'PSU', 'Case'];

            // 4. Iterate and Build Sections
            catOrder.forEach(type => {
                if(groupedProducts[type] && groupedProducts[type].length > 0) {
                    
                    // Create Group Container
                    const groupSection = document.createElement('div');
                    groupSection.className = 'category-group';

                    // Get color for this group
                    const catColor = getCategoryColorVar(type);
                    const icon = category_icons[type] || '';

                    // Create Header
                    const header = document.createElement('div');
                    header.className = 'group-header';
                    header.style.borderColor = catColor;
                    header.style.color = catColor;
                    header.innerHTML = `<span>${icon}</span> <span>${type}s</span>`;
                    groupSection.appendChild(header);

                    // Create Grid
                    const grid = document.createElement('div');
                    grid.className = 'product-grid';

                    // Add Cards to Grid
                    groupedProducts[type].forEach(p => {
                        const card = document.createElement('div');
                        const catClass = getCategoryClass(p.type);
                        
                        card.className = `card ${catClass}`;
                        card.onclick = () => { 
                            loadMainProduct(p); 
                            loadSimilarProducts(p.id);
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        };

                        card.innerHTML = `
                            <span class="card-type-tag">${p.type}</span>
                            <span class="card-icon">${icon}</span> 
                            <div class="card-title">${p.name}</div>
                            <div class="card-price">${p.price}</div>
                        `;
                        grid.appendChild(card);
                    });

                    groupSection.appendChild(grid);
                    mainContainer.appendChild(groupSection);
                }
            });
        }
    
        // --- 5. INITIALIZATION ---
        
        // 1. Check for "id" in the URL (e.g., product-details.html?id=5)
        const urlParams = new URLSearchParams(window.location.search);
        const urlId = parseInt(urlParams.get('id'));

        // 2. Find the product, or default to the first one if no ID is found
        let initialProduct = products.find(p => p.id === urlId);
        
        if (!initialProduct) {
            initialProduct = products[0]; // Default fallback
        }

        // 3. Load the page
        loadMainProduct(initialProduct);
        loadSimilarProducts(initialProduct.id);
