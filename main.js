const API_KEY = '45433263-21e67e875699bbc09dde54170';
const IMAGES_PER_PAGE = 15;
const URL = 'https://pixabay.com/api/?key=' + API_KEY + '&per_page=' + IMAGES_PER_PAGE;

let prevBtn = document.querySelector('.carousel-button.prev');
let nextBtn = document.querySelector('.carousel-button.next');
let carousel = document.querySelector('.carousel');
let indicators = document.querySelector('.carousel-indicators');
let currentIndex = 0;
let images = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
});
async function fetchImages(){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
            images =  data.hits ;
            createCarousel(images);
        } else {
            console.error('No images found');
        }
    }catch(error){
        console.error("Error fetching images", error)
    }

}
function createCarousel(){
    images.forEach((imgae,index) =>{
        const li = document.createElement('li');
        li.classList.add("carousel-item");
        
    })

    // images.forEach(image ,index) => {
    //     const li = document.createElement('li');
    //     li.classList.add("carousel-item");

    //     const img = document.createElement('img');
    //     img.src = img.webformatURL;

    //     li.appendChild(img)

    // }
};

































































// const API_KEY = '45433263-21e67e875699bbc09dde54170';
// const IMAGES_PER_PAGE = 10;

// document.addEventListener('DOMContentLoaded', () => {
//     fetchImages();
// });

// async function fetchImages() {
//     try {
//         const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&per_page=${IMAGES_PER_PAGE}`);
//         const data = await response.json();
        
//         if (data.hits && data.hits.length > 0) {
//             createCarousel(data.hits);
//         } else {
//             console.error('No images found');
//         }
//     } catch (error) {
//         console.error('Error fetching images:', error);
//     }
// }

// function createCarousel(images) {
//     const carousel = document.querySelector('.carousel');
//     const indicators = document.querySelector('.carousel-indicators');

//     images.forEach((image, index) => {
//         // Create carousel item
//         const item = document.createElement('div');
//         item.className = 'carousel-item';
//         item.style.display = index === 0 ? 'block' : 'none';
//         item.innerHTML = `<img src="${image.webformatURL}" alt="${image.tags}">`;
//         carousel.appendChild(item);

//         // Create indicator
//         const indicator = document.createElement('div');
//         indicator.className = 'indicator';
//         if (index === 0) indicator.classList.add('active');
//         indicators.appendChild(indicator);
//     });

//     initCarousel();
// }

// function initCarousel() {
//     const items = document.querySelectorAll('.carousel-item');
//     const prevButton = document.querySelector('.carousel-button.prev');
//     const nextButton = document.querySelector('.carousel-button.next');
//     const indicators = document.querySelectorAll('.indicator');
//     let currentIndex = 0;

//     function showItem(index) {
//         items.forEach((item, i) => {
//             item.style.display = i === index ? 'block' : 'none';
//         });
//         indicators.forEach((indicator, i) => {
//             indicator.classList.toggle('active', i === index);
//         });
//     }

//     function nextItem() {
//         currentIndex = (currentIndex + 1) % items.length;
//         showItem(currentIndex);
//     }

//     function prevItem() {
//         currentIndex = (currentIndex - 1 + items.length) % items.length;
//         showItem(currentIndex);
//     }

//     prevButton.addEventListener('click', prevItem);
//     nextButton.addEventListener('click', nextItem);

//     indicators.forEach((indicator, index) => {
//         indicator.addEventListener('click', () => {
//             currentIndex = index;
//             showItem(currentIndex);
//         });
//     });

// }