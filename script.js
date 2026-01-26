// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Brands data
const brands = [
    { id: "samsung", name: "Samsung", icon: "fab fa-android", color: "#1428a0", models: "Galaxy S, A, M, Note Series" },
    { id: "apple", name: "Apple", icon: "fab fa-apple", color: "#a2aaad", models: "iPhone, iPad, iPod" },
    { id: "xiaomi", name: "Xiaomi", icon: "fas fa-bolt", color: "#ff6900", models: "MI, Redmi, POCO Series" },
    { id: "oneplus", name: "OnePlus", icon: "fas fa-plus", color: "#eb0029", models: "OnePlus Series" },
    { id: "google", name: "Google", icon: "fab fa-google", color: "#4285f4", models: "Pixel Series" },
    { id: "motorola", name: "Motorola", icon: "fas fa-m", color: "#5c92d8", models: "Moto, Edge Series" },
    { id: "realme", name: "Realme", icon: "fas fa-r", color: "#ff5a22", models: "Realme Series" },
    { id: "oppo", name: "Oppo", icon: "fas fa-o", color: "#0088ff", models: "Oppo Series" },
    { id: "vivo", name: "Vivo", icon: "fas fa-v", color: "#415fff", models: "Vivo Series" },
    { id: "nokia", name: "Nokia", icon: "fas fa-n", color: "#124191", models: "Nokia Series" },
    { id: "sony", name: "Sony", icon: "fas fa-play", color: "#0066cc", models: "Xperia Series" },
    { id: "lg", name: "LG", icon: "fas fa-l", color: "#a50034", models: "LG Series" }
];

// Websites data
const websites = [
    {
        name: "SamFW",
        url: "https://samfw.com",
        description: "Complete Samsung firmware download site with tools for downloading, decrypting and flashing firmware.",
        type: "official",
        icon: "fas fa-download"
    },
    {
        name: "IPSW Downloads",
        url: "https://ipsw.me",
        description: "Complete archive of iPhone, iPad, iPod, Apple TV and Apple Watch firmware (IPSW files).",
        type: "official",
        icon: "fab fa-apple"
    },
    {
        name: "Xiaomi Firmware Updater",
        url: "https://xiaomifirmwareupdater.com",
        description: "Official MIUI firmware downloads for all Xiaomi, Redmi and POCO devices worldwide.",
        type: "official",
        icon: "fas fa-sync-alt"
    },
    {
        name: "Oxygen Updater",
        url: "https://oxygenupdater.com",
        description: "Official app and website for downloading OxygenOS updates for OnePlus devices.",
        type: "official",
        icon: "fas fa-rocket"
    },
    {
        name: "Google Pixel Factory Images",
        url: "https://developers.google.com/android/images",
        description: "Official Google factory images for Pixel devices for flashing and restoration.",
        type: "official",
        icon: "fab fa-google"
    },
    {
        name: "Firmware.mobi",
        url: "https://firmware.mobi",
        description: "Massive firmware archive for hundreds of device models from multiple manufacturers.",
        type: "multi",
        icon: "fas fa-database"
    },
    {
        name: "XDA Developers",
        url: "https://forum.xda-developers.com",
        description: "World's largest Android development community with firmware, ROMs, and tools.",
        type: "community",
        icon: "fas fa-laptop-code"
    },
    {
        name: "Android File Host",
        url: "https://androidfilehost.com",
        description: "Massive file hosting service for Android ROMs, kernels, recoveries, and firmware.",
        type: "community",
        icon: "fas fa-server"
    },
    {
        name: "SamMobile",
        url: "https://www.sammobile.com",
        description: "Official Samsung firmware archive with the largest collection of Samsung firmware files.",
        type: "official",
        icon: "fas fa-mobile-alt"
    },
    {
        name: "NeedROM",
        url: "https://needrom.com",
        description: "Large collection of custom ROMs, stock firmware, and tools for Android devices.",
        type: "community",
        icon: "fas fa-microchip"
    }
];

// Firmware data
const firmwareList = [
    { 
        device: "Samsung Galaxy S23 Ultra", 
        brand: "Samsung", 
        version: "Android 13", 
        region: "Global", 
        date: "2023-08-15", 
        size: "4.2 GB",
        model: "SM-S918B"
    },
    { 
        device: "iPhone 14 Pro Max", 
        brand: "Apple", 
        version: "iOS 16.5", 
        region: "Global", 
        date: "2023-08-10", 
        size: "5.1 GB",
        model: "A2894"
    },
    { 
        device: "Xiaomi 13 Pro", 
        brand: "Xiaomi", 
        version: "MIUI 14", 
        region: "Global", 
        date: "2023-08-12", 
        size: "3.8 GB",
        model: "2210132G"
    },
    { 
        device: "Google Pixel 7 Pro", 
        brand: "Google", 
        version: "Android 13", 
        region: "Global", 
        date: "2023-08-08", 
        size: "2.9 GB",
        model: "GP4BC"
    },
    { 
        device: "OnePlus 11", 
        brand: "OnePlus", 
        version: "OxygenOS 13", 
        region: "India", 
        date: "2023-08-05", 
        size: "3.5 GB",
        model: "CPH2447"
    },
    { 
        device: "Motorola Edge 40", 
        brand: "Motorola", 
        version: "Android 13", 
        region: "Global", 
        date: "2023-07-30", 
        size: "2.8 GB",
        model: "XT2303-2"
    }
];

// FAQ data
const faqList = [
    {
        question: "How to download Samsung firmware?",
        answer: "To download Samsung firmware: 1) Go to our Samsung firmware section 2) Select your device model (Galaxy S23, A54, etc.) 3) Choose your region 4) Download the firmware file 5) Use Odin tool to flash it to your device."
    },
    {
        question: "Where to download iPhone firmware (IPSW)?",
        answer: "iPhone firmware (IPSW files) can be downloaded from our Apple section. We provide direct links to official iOS firmware for all iPhone models from iPhone 5s to iPhone 14 Pro Max."
    },
    {
        question: "How to flash Xiaomi ROM with Mi Flash Tool?",
        answer: "To flash Xiaomi ROM: 1) Download Mi Flash Tool and Xiaomi USB drivers 2) Boot your phone into Fastboot mode 3) Extract the firmware file 4) Load it in Mi Flash Tool 5) Click flash and wait for completion."
    },
    {
        question: "Is downloading firmware safe?",
        answer: "Yes, if downloaded from official sources like our website. We verify all firmware files for authenticity and security. Always download from trusted sources to avoid malware."
    },
    {
        question: "Will flashing firmware void warranty?",
        answer: "Flashing official firmware does not void warranty. However, installing custom ROMs or unofficial software might void your warranty. Check your manufacturer's policy."
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load brands
    loadBrands();
    
    // Load websites
    loadWebsites();
    
    // Load firmware
    loadFirmware();
    
    // Load FAQ
    loadFAQ();
    
    // Setup search
    setupSearch();
    
    // Setup filter buttons
    setupFilters();
    
    // Add schema data
    addSchemaData();
});

// Load brands to the page
function loadBrands() {
    const brandsGrid = document.getElementById('brands-grid');
    if (!brandsGrid) return;
    
    brandsGrid.innerHTML = '';
    
    brands.forEach(brand => {
        const brandCard = document.createElement('a');
        brandCard.href = `#${brand.id}`;
        brandCard.className = 'brand-card';
        brandCard.innerHTML = `
            <div class="brand-icon" style="background-color: ${brand.color}20; color: ${brand.color};">
                <i class="${brand.icon}"></i>
            </div>
            <h3>${brand.name} Firmware</h3>
            <p>${brand.models}</p>
        `;
        
        brandCard.addEventListener('click', function(e) {
            e.preventDefault();
            filterWebsitesByBrand(brand.id);
        });
        
        brandsGrid.appendChild(brandCard);
    });
}

// Load websites to the page
function loadWebsites(filter = 'all') {
    const websitesGrid = document.getElementById('websites-grid');
    if (!websitesGrid) return;
    
    websitesGrid.innerHTML = '';
    
    let filteredWebsites = websites;
    
    if (filter !== 'all') {
        filteredWebsites = websites.filter(website => website.type === filter);
    }
    
    filteredWebsites.forEach(website => {
        const websiteCard = document.createElement('div');
        websiteCard.className = 'website-card';
        websiteCard.innerHTML = `
            <div class="website-header">
                <div class="website-icon">
                    <i class="${website.icon}"></i>
                </div>
                <div class="website-title">
                    <h3>${website.name}</h3>
                </div>
                <div class="website-type">${website.type.charAt(0).toUpperCase() + website.type.slice(1)}</div>
            </div>
            <div class="website-body">
                <p class="website-description">${website.description}</p>
                <div class="website-actions">
                    <a href="${website.url}" target="_blank" class="btn btn-primary btn-full">
                        <i class="fas fa-external-link-alt"></i> Visit Website
                    </a>
                </div>
            </div>
        `;
        
        websitesGrid.appendChild(websiteCard);
    });
}

// Filter websites by brand
function filterWebsitesByBrand(brandId) {
    const brand = brands.find(b => b.id === brandId);
    if (!brand) return;
    
    let filteredWebsites = websites;
    
    // Special handling for brands
    if (brandId === 'samsung') {
        filteredWebsites = websites.filter(website => 
            website.name.toLowerCase().includes('sam') || 
            website.type === 'multi'
        );
    } else if (brandId === 'apple') {
        filteredWebsites = websites.filter(website => 
            website.name.toLowerCase().includes('ipsw') || 
            website.name.toLowerCase().includes('apple') ||
            website.type === 'multi'
        );
    } else if (brandId === 'xiaomi') {
        filteredWebsites = websites.filter(website => 
            website.name.toLowerCase().includes('xiaomi') || 
            website.name.toLowerCase().includes('miui') ||
            website.type === 'multi'
        );
    }
    
    const websitesGrid = document.getElementById('websites-grid');
    if (!websitesGrid) return;
    
    websitesGrid.innerHTML = '';
    
    filteredWebsites.forEach(website => {
        const websiteCard = document.createElement('div');
        websiteCard.className = 'website-card';
        websiteCard.innerHTML = `
            <div class="website-header">
                <div class="website-icon">
                    <i class="${website.icon}"></i>
                </div>
                <div class="website-title">
                    <h3>${website.name}</h3>
                </div>
                <div class="website-type">${website.type.charAt(0).toUpperCase() + website.type.slice(1)}</div>
            </div>
            <div class="website-body">
                <p class="website-description">${website.description}</p>
                <div class="website-actions">
                    <a href="${website.url}" target="_blank" class="btn btn-primary btn-full">
                        <i class="fas fa-external-link-alt"></i> Visit Website
                    </a>
                </div>
            </div>
        `;
        
        websitesGrid.appendChild(websiteCard);
    });
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    
    // Scroll to websites section
    document.getElementById('websites').scrollIntoView({ behavior: 'smooth' });
}

// Load firmware to the page
function loadFirmware() {
    const firmwareItems = document.getElementById('firmware-items');
    const firmwareCount = document.getElementById('firmware-count');
    
    if (!firmwareItems || !firmwareCount) return;
    
    firmwareItems.innerHTML = '';
    firmwareCount.textContent = `${firmwareList.length} Available`;
    
    firmwareList.forEach(firmware => {
        const firmwareItem = document.createElement('div');
        firmwareItem.className = 'firmware-item';
        firmwareItem.innerHTML = `
            <div class="device-info">
                <h4>${firmware.device}</h4>
                <div class="device-meta">
                    <span><i class="fas fa-mobile-alt"></i> ${firmware.model}</span>
                    <span><i class="fas fa-code-branch"></i> ${firmware.version}</span>
                    <span><i class="fas fa-globe"></i> ${firmware.region}</span>
                    <span><i class="fas fa-calendar"></i> ${firmware.date}</span>
                    <span><i class="fas fa-download"></i> ${firmware.size}</span>
                </div>
            </div>
            <div class="firmware-actions">
                <button class="btn btn-primary download-btn" data-device="${firmware.device}">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="btn btn-secondary details-btn" data-device="${firmware.device}">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </div>
        `;
        
        firmwareItems.appendChild(firmwareItem);
    });
    
    // Add download button events
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const device = this.getAttribute('data-device');
            showDownloadModal(device);
        });
    });
    
    // Add details button events
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const device = this.getAttribute('data-device');
            showDetailsModal(device);
        });
    });
}

// Load FAQ to the page
function loadFAQ() {
    const faqListElement = document.getElementById('faq-list');
    if (!faqListElement) return;
    
    faqListElement.innerHTML = '';
    
    faqList.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                ${faq.question}
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;
        
        faqItem.addEventListener('click', function() {
            this.classList.toggle('active');
        });
        
        faqListElement.appendChild(faqItem);
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (!searchInput || !searchBtn) return;
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (!query) {
            alert('Please enter a device name or model to search.');
            return;
        }
        
        // Show loading state
        const originalText = searchBtn.innerHTML;
        searchBtn.innerHTML = '<div class="loading"></div>';
        
        // Simulate search
        setTimeout(() => {
            searchBtn.innerHTML = originalText;
            
            // Filter firmware based on search query
            const filteredFirmware = firmwareList.filter(firmware => 
                firmware.device.toLowerCase().includes(query) || 
                firmware.model.toLowerCase().includes(query) ||
                firmware.brand.toLowerCase().includes(query)
            );
            
            if (filteredFirmware.length > 0) {
                // Show results
                const firmwareItems = document.getElementById('firmware-items');
                const firmwareCount = document.getElementById('firmware-count');
                
                firmwareItems.innerHTML = '';
                firmwareCount.textContent = `${filteredFirmware.length} Results`;
                
                filteredFirmware.forEach(firmware => {
                    const firmwareItem = document.createElement('div');
                    firmwareItem.className = 'firmware-item';
                    firmwareItem.innerHTML = `
                        <div class="device-info">
                            <h4>${firmware.device}</h4>
                            <div class="device-meta">
                                <span><i class="fas fa-mobile-alt"></i> ${firmware.model}</span>
                                <span><i class="fas fa-code-branch"></i> ${firmware.version}</span>
                                <span><i class="fas fa-globe"></i> ${firmware.region}</span>
                                <span><i class="fas fa-calendar"></i> ${firmware.date}</span>
                                <span><i class="fas fa-download"></i> ${firmware.size}</span>
                            </div>
                        </div>
                        <div class="firmware-actions">
                            <button class="btn btn-primary download-btn" data-device="${firmware.device}">
                                <i class="fas fa-download"></i> Download
                            </button>
                            <button class="btn btn-secondary details-btn" data-device="${firmware.device}">
                                <i class="fas fa-info-circle"></i> Details
                            </button>
                        </div>
                    `;
                    
                    firmwareItems.appendChild(firmwareItem);
                });
                
                // Add event listeners to new buttons
                document.querySelectorAll('.download-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const device = this.getAttribute('data-device');
                        showDownloadModal(device);
                    });
                });
                
                document.querySelectorAll('.details-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const device = this.getAttribute('data-device');
                        showDetailsModal(device);
                    });
                });
                
                // Scroll to firmware section
                document.getElementById('firmware').scrollIntoView({ behavior: 'smooth' });
            } else {
                alert(`No firmware found for "${query}". Try searching for a different device.`);
            }
        }, 800);
    }
}

// Setup filter buttons
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filter websites
            loadWebsites(filter);
        });
    });
}

// Show download modal
function showDownloadModal(device) {
    const firmware = firmwareList.find(f => f.device === device);
    if (!firmware) return;
    
    const modalHTML = `
        <div class="modal-overlay" id="download-modal">
            <div class="modal">
                <div class="modal-header">
                    <h3>Download ${device}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p><strong>Device:</strong> ${firmware.device}</p>
                    <p><strong>Model:</strong> ${firmware.model}</p>
                    <p><strong>Version:</strong> ${firmware.version}</p>
                    <p><strong>Region:</strong> ${firmware.region}</p>
                    <p><strong>Size:</strong> ${firmware.size}</p>
                    
                    <div class="download-options">
                        <h4>Download Options:</h4>
                        <div class="download-links">
                            <a href="#" class="download-link" target="_blank">
                                <i class="fas fa-download"></i> Direct Download
                            </a>
                            <a href="#" class="download-link" target="_blank">
                                <i class="fas fa-cloud-download-alt"></i> Google Drive
                            </a>
                            <a href="#" class="download-link" target="_blank">
                                <i class="fab fa-mega"></i> MEGA
                            </a>
                        </div>
                    </div>
                    
                    <div class="modal-warning">
                        <p><i class="fas fa-exclamation-triangle"></i> <strong>Warning:</strong> Flashing firmware will erase all data on your device. Make sure to backup important files before proceeding.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary modal-close-btn">Cancel</button>
                    <button class="btn btn-primary" id="start-download">Start Download</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    // Add modal styles if not already added
    if (!document.getElementById('modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                padding: 20px;
            }
            
            .modal {
                background: white;
                border-radius: 12px;
                width: 100%;
                max-width: 500px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                overflow: hidden;
            }
            
            .modal-header {
                background: var(--primary-color);
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-header h3 {
                margin: 0;
                font-size: 20px;
            }
            
            .modal-close {
                background: none;
                border: none;
                color: white;
                font-size: 28px;
                cursor: pointer;
                line-height: 1;
            }
            
            .modal-body {
                padding: 25px;
            }
            
            .modal-body p {
                margin-bottom: 10px;
            }
            
            .download-options {
                margin: 25px 0;
                padding: 20px;
                background: var(--light-bg);
                border-radius: 8px;
            }
            
            .download-options h4 {
                margin: 0 0 15px 0;
                color: var(--primary-color);
            }
            
            .download-links {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .download-link {
                display: block;
                padding: 12px 15px;
                background: white;
                border-radius: 6px;
                text-decoration: none;
                color: var(--text-color);
                font-weight: 600;
                transition: all 0.3s;
                border: 1px solid var(--border-color);
            }
            
            .download-link:hover {
                background: var(--secondary-color);
                color: white;
                border-color: var(--secondary-color);
            }
            
            .modal-warning {
                background: #fff3cd;
                border: 1px solid #ffeaa7;
                border-radius: 6px;
                padding: 15px;
                margin-top: 20px;
            }
            
            .modal-warning p {
                margin: 0;
                color: #856404;
                font-size: 14px;
                line-height: 1.5;
            }
            
            .modal-warning i {
                color: #856404;
                margin-right: 8px;
            }
            
            .modal-footer {
                padding: 20px;
                background: var(--light-bg);
                display: flex;
                justify-content: flex-end;
                gap: 10px;
            }
            
            @media (max-width: 576px) {
                .modal-footer {
                    flex-direction: column;
                }
                
                .modal-footer .btn {
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }
    
    // Add event listeners
    const modalOverlay = document.getElementById('download-modal');
    const closeButtons = modalOverlay.querySelectorAll('.modal-close, .modal-close-btn');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlay.remove();
        });
    });
    
    // Start download button
    const startDownloadBtn = document.getElementById('start-download');
    if (startDownloadBtn) {
        startDownloadBtn.addEventListener('click', () => {
            alert(`Starting download for ${device}. This is a demo - in a real website, the download would begin.`);
            modalOverlay.remove();
        });
    }
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.remove();
        }
    });
}

// Show details modal
function showDetailsModal(device) {
    const firmware = firmwareList.find(f => f.device === device);
    if (!firmware) return;
    
    const modalHTML = `
        <div class="modal-overlay" id="details-modal">
            <div class="modal">
                <div class="modal-header">
                    <h3>${device} Details</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="firmware-details">
                        <div class="detail-row">
                            <span class="detail-label">Device Name:</span>
                            <span class="detail-value">${firmware.device}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Model Number:</span>
                            <span class="detail-value">${firmware.model}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Android/iOS Version:</span>
                            <span class="detail-value">${firmware.version}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Region:</span>
                            <span class="detail-value">${firmware.region}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Release Date:</span>
                            <span class="detail-value">${firmware.date}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">File Size:</span>
                            <span class="detail-value">${firmware.size}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Brand:</span>
                            <span class="detail-value">${firmware.brand}</span>
                        </div>
                    </div>
                    
                    <div class="flashing-instructions">
                        <h4>Flashing Instructions:</h4>
                        <ol>
                            <li>Download the correct firmware for your device model and region</li>
                            <li>Install USB drivers for your device on your computer</li>
                            <li>Enable USB debugging and OEM unlocking in developer options</li>
                            <li>Boot your device into download/fastboot mode</li>
                            <li>Use the appropriate flashing tool (Odin, Mi Flash, Fastboot, etc.)</li>
                            <li>Load the firmware file and start the flashing process</li>
                            <li>Wait for completion and reboot your device</li>
                        </ol>
                    </div>
                    
                    <div class="modal-note">
                        <p><i class="fas fa-info-circle"></i> <strong>Note:</strong> These are general instructions. Refer to brand-specific guides for detailed steps.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary modal-close-btn">Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    // Add modal styles if not already added (they should be added by download modal)
    
    // Add event listeners
    const modalOverlay = document.getElementById('details-modal');
    const closeButtons = modalOverlay.querySelectorAll('.modal-close, .modal-close-btn');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlay.remove();
        });
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.remove();
        }
    });
}

// Add schema data
function addSchemaData() {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqList.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
    
    // SoftwareApplication Schema
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Mobile Firmware Downloads",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Android, iOS",
        "description": "Official firmware downloads for mobile phones",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };
    
    // Add schemas to page
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
    
    const softwareScript = document.createElement('script');
    softwareScript.type = 'application/ld+json';
    softwareScript.text = JSON.stringify(softwareSchema);
    document.head.appendChild(softwareScript);
}