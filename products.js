   const products = [
            // GPUs
             { id: 1, type: "GPU", name: "NVIDIA RTX 5090", brand: "ASUS ROG", price: "$1,999" },
            { id: 2, type: "GPU", name: "NVIDIA RTX 5080", brand: "MSI Gaming", price: "$1,199" },
            { id: 3, type: "GPU", name: "NVIDIA RTX 5070", brand: "Gigabyte Eagle", price: "$799" },
            { id: 4, type: "GPU", name: "NVIDIA RTX 4090", brand: "NVIDIA FE", price: "$1,699" },
            { id: 5, type: "GPU", name: "NVIDIA RTX 4080 Super", brand: "Zotac", price: "$999" },
            { id: 6, type: "GPU", name: "NVIDIA RTX 4070 Ti", brand: "PNY", price: "$799" },
            // CPUs
            { id: 7, type: "CPU", name: "Intel Core i9-14900K", brand: "Intel", price: "$589" },
            { id: 8, "type": "CPU", name: "Intel Core i7-14700K", brand: "Intel", price: "$409" },
            { id: 9, "type": "CPU", name: "Intel Core i5-13400F", brand: "Intel", price: "$209" },
            { id: 10, type: "CPU", name: "AMD Ryzen 9 7950X3D", brand: "AMD", price: "$599" },
            { id: 11, type: "CPU", name: "AMD Ryzen 7 7800X3D", brand: "AMD", price: "$399" },
            { id: 12, type: "CPU", name: "AMD Ryzen 5 7600", brand: "AMD", price: "$229" },
            // MOTHERBOARDS
            { id: 13, type: "Mobo", name: "ASUS ROG Maximus Z790", brand: "Intel Chipset", price: "$699" },
            { id: 14, type: "Mobo", name: "MSI MAG B760 Tomahawk", brand: "Intel Chipset", price: "$189" },
            { id: 15, type: "Mobo", name: "Gigabyte H610M", brand: "Intel Chipset", price: "$89" },
            { id: 16, type: "Mobo", name: "ASRock X670E Taichi", brand: "AMD Chipset", price: "$499" },
            { id: 17, type: "Mobo", name: "Gigabyte B650 Aorus Elite", brand: "AMD Chipset", price: "$219" },
            { id: 18, type: "Mobo", name: "MSI PRO A620M", brand: "AMD Chipset", price: "$85" },
             // CASES
            { id: 19, type: "Case", name: "Lian Li O11 Dynamic EVO", brand: "Lian Li", price: "$159" },
            { id: 20, type: "Case", name: "Corsair 4000D Airflow", brand: "Corsair", price: "$104" },
            { id: 21, type: "Case", name: "NZXT H5 Flow", brand: "NZXT", price: "$94" },
            { id: 22, type: "Case", name: "Fractal Design North", brand: "Fractal", price: "$139" },
            { id: 23, type: "Case", name: "Cooler Master Q300L", brand: "Cooler Master", price: "$39" },
            { id: 24, type: "Case", name: "Phanteks NV7", brand: "Phanteks", price: "$219" },
            // PSU
            { id: 25, type: "PSU", name: "Corsair RM1000x", brand: "Corsair", price: "$189" },
            { id: 26, type: "PSU", name: "Seasonic Vertex GX-1200", brand: "Seasonic", price: "$239" },
            { id: 27, type: "PSU", name: "MSI MAG A850GL", brand: "MSI", price: "$109" },
            { id: 28, type: "PSU", name: "EVGA 700 GD", brand: "EVGA", price: "$79" },
            { id: 29, type: "PSU", name: "Thermaltake Smart 600W", brand: "Thermaltake", price: "$45" },
            { id: 30, type: "PSU", name: "Be Quiet! Dark Power 13", brand: "Be Quiet!", price: "$289" },
            // RAM
            { id: 31, type: "RAM", name: "G.Skill Trident Z5 RGB", brand: "G.Skill", price: "$119" },
            { id: 32, type: "RAM", name: "Corsair Vengeance", brand: "Corsair", price: "$99" },
            { id: 33, type: "RAM", name: "TeamGroup Delta RGB", brand: "TeamGroup", price: "$105" },
            { id: 34, type: "RAM", name: "Kingston Fury Beast", brand: "Kingston", price: "$59" },
            { id: 35, type: "RAM", name: "Corsair Vengeance LPX", brand: "Corsair", price: "$44" },
            { id: 36, type: "RAM", name: "G.Skill Royal Elite", brand: "G.Skill", price: "$159" },
            // STORAGE
            { id: 37, type: "Storage", name: "Samsung 990 Pro", brand: "Samsung", price: "$169" },
            { id: 38, type: "Storage", name: "WD Black SN850X", brand: "Western Digital", price: "$159" },
            { id: 39, type: "Storage", name: "Crucial P3 Plus", brand: "Crucial", price: "$119" },
            { id: 40, type: "Storage", name: "Kingston NV2", brand: "Kingston", price: "$60" },
            { id: 41, type: "Storage", name: "Samsung 870 EVO", brand: "Samsung", price: "$89" },
            { id: 42, type: "Storage", name: "Crucial MX500", brand: "Crucial", price: "$55" }
        ];

        const category_icons = { 'GPU': '🎮', 'CPU': '🧠', 'Mobo': '🔌', 'Case': '💻', 'PSU': '⚡', 'RAM': '💾', 'Storage': '💿' };

      
        const grid = document.getElementById('productGrid');
        const searchInput = document.getElementById('searchInput');
        const catButtons = document.querySelectorAll('.cat-btn');

        let currentCategory = "All";
        let searchTerm = "";

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

        function renderProducts() {
            grid.innerHTML = '';

            const filtered = products.filter(p => {
                const matchesCat = currentCategory === "All" || p.type === currentCategory;
                const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                      p.brand.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCat && matchesSearch;
            });

            if (filtered.length === 0) {
                grid.innerHTML = '<div class="no-results">No components found matching your criteria.</div>';
                return;
            }

            filtered.forEach(p => {
                const icon = category_icons[p.type] || '❓';
                const catClass = getCategoryClass(p.type);
                
                
                const card = document.createElement('a');
                card.href = `details .html?id=${p.id}`; 
                card.className = `card ${catClass}`;

                card.innerHTML = `
                    <span class="card-type-tag">${p.type}</span>
                    <span class="card-icon">${icon}</span>
                    <span class="card-brand">${p.brand}</span>
                    <div class="card-title">${p.name}</div>
                    <div class="card-price">${p.price}</div>
                `;
                grid.appendChild(card);
            });
        }

         
        
         
        catButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                 
                catButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                 
                currentCategory = btn.getAttribute('data-cat');
                renderProducts();
            });
        });

         
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderProducts();
        });

         
        renderProducts();