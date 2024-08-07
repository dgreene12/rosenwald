document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    }

    // Parallax scroll effect
    window.addEventListener('scroll', function () {
        const heroImage = document.querySelector('.hero-image');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            heroImage.style.opacity = 1;
        } else {
            heroImage.style.opacity = 0;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    }

    // Initialize the map
    const map = L.map('map').setView([35.7596, -79.0193], 7); // Centered on North Carolina

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Load the shapefile
    omnivore.shapefile('https://raw.githubusercontent.com/dgreene12/rosenwald/2d609186bb663c3f4a62dcae24e76308caca8dc7/North_Carolina_State_and_County_Boundary_Polygons.shp')
        .on('ready', function(layer) {
            map.fitBounds(layer.target.getBounds());
            layer.eachLayer(function(layer) {
                const countyName = layer.feature.properties.NAME;
                if (['Durham', 'Pasquotank', 'Martin', 'Hoke'].includes(countyName)) {
                    layer.setStyle({
                        color: 'blue',
                        weight: 2,
                        fillOpacity: 0.4,
                    });
                } else {
                    layer.setStyle({
                        color: '#ccc',
                        weight: 1,
                        fillOpacity: 0.1,
                    });
                }
            });
        })
        .addTo(map);
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');

    // Smooth scroll for navbar links
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - nav.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Parallax scroll effect for hero image
    window.addEventListener('scroll', function () {
        const heroImage = document.querySelector('.hero-image');
        const scrollPosition = window.scrollY;
        heroImage.style.opacity = scrollPosition > 50 ? 1 : 0;
    });

    // Highlight the relevant section of the navbar
    window.addEventListener('scroll', function () {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - nav.offsetHeight;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});

function toggleContent(buttonId, contentClass, picClass, overlayClass, boxClass) {
    const button = document.getElementById(buttonId);
    const contents = document.querySelectorAll(contentClass);
    const pic = document.querySelector(picClass);
    const overlay = document.querySelector(overlayClass);
    const box = document.querySelector(boxClass);

    button.addEventListener('click', function() {
        const isShowingAll = button.textContent === 'Show Less';

        contents.forEach((content) => {
            content.style.display = isShowingAll ? 'none' : 'block';
        });

        if (pic) pic.style.display = isShowingAll ? 'none' : 'block';
        if (overlay) overlay.style.display = isShowingAll ? 'none' : 'block';
        if (box) box.style.display = isShowingAll ? 'none' : 'block';

        button.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const showMoreButton = document.getElementById('show-more-rank');
    const showMoreButton4 = document.getElementById('show-more-info4');
    const showMoreButton5 = document.getElementById('show-more-info5');
    const showMoreButton6 = document.getElementById('show-more-info6');
    const moreRankingItems = document.querySelectorAll('.more-ranking');
    const moreContent = document.querySelectorAll('.more-content');
    


    showMoreButton.addEventListener('click', () => {
        const isShowingAll = showMoreButton.textContent === 'Show Less';

        moreRankingItems.forEach(item => {
            item.style.display = isShowingAll ? 'none' : 'list-item';
        });

        showMoreButton.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });
    showMoreButton4.addEventListener('click', () => {
        const isShowingAll = showMoreButton4.textContent === 'Show Less';
        const moreContent4 = document.querySelector('.info4 .more-content-boxes');


        moreRankingItems.forEach(item => {
            item.style.display = isShowingAll ? 'none' : 'list-item';
        });
        moreContent.forEach(item => {
            item.style.display = isShowingAll ? 'none' : 'list-item';
        });

        moreContent4.style.display = isShowingAll ? 'none' : 'block';
        showMoreButton4.textContent = isShowingAll ? 'Show More' : 'Show Less';
      });
    showMoreButton5.addEventListener('click', () => {
        const isShowingAll = showMoreButton5.textContent === 'Show Less';

        moreContent.forEach(item => {
            item.style.display = isShowingAll ? 'none' : 'list-item';
        });

        showMoreButton5.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });
    showMoreButton6.addEventListener('click', () => {
        const isShowingAll = showMoreButton5.textContent === 'Show Less';

        moreContent.forEach(item => {
            item.style.display = isShowingAll ? 'none' : 'list-item';
        });

        showMoreButton6.textContent = isShowingAll ? 'Show More' : 'Show Less';
    });
});


const slideIndices = { 1: 0, 2: 0 , 3: 0, 4: 0}; // Initialize slide indices for carousels

function moveSlides(direction, carouselId) {
    const slides = document.querySelector(`#carousel${carouselId} .carousel-slide`);
    const totalSlides = slides.children.length;

    slideIndices[carouselId] += direction;

    if (slideIndices[carouselId] < 0) {
        slideIndices[carouselId] = totalSlides - 1;
    } else if (slideIndices[carouselId] >= totalSlides) {
        slideIndices[carouselId] = 0;
    }

    const newTransform = -slideIndices[carouselId] * 100;
    slides.style.transform = `translateX(${newTransform}%)`;

    // Update indicators
    updateIndicators(carouselId);
}

function currentSlide(slideNumber, carouselId) {
    slideIndices[carouselId] = slideNumber - 1;
    moveSlides(0, carouselId); // Move to the specified slide
}

// Update indicators based on the current slide
function updateIndicators(carouselId) {
    const indicators = document.querySelectorAll(`#carousel${carouselId} .indicator`);
    indicators.forEach((indicator, index) => {
        if (index === slideIndices[carouselId]) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}