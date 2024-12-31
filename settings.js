const settings = {
    title: "Responsive",
    backgroundVideo: "https://telegra.ph/file/dfec84103742ee6350a8b.mp4",
    sliderImages: [
        "https://telegra.ph/file/c8a25a200f5d6259f5b45.jpg",
        "https://telegra.ph/file/c8a25a200f5d6259f5b45.jpg",
        "https://telegra.ph/file/c8a25a200f5d6259f5b45.jpg"
    ],
    heading: "Cup Cake",
    description: "From a bakery comes the scent of fresh bread",
    buttons: [
        { class: "icon-store", text: "🛒 Store", link: "#" },
        { class: "icon-book", text: "📖 Book", link: "#" },
        { class: "icon-products", text: "🛍️ Products", link: "#" },
        { class: "icon-location", text: "📍 Location", link: "#" }
    ],
    socialIcons: [
        { platform: "facebook", url: "https://www.facebook.com", icon: "fab fa-facebook-f" },
        { platform: "twitter", url: "https://www.twitter.com", icon: "fab fa-twitter" },
        { platform: "instagram", url: "https://www.instagram.com", icon: "fab fa-instagram" },
        { platform: "youtube", url: "https://www.youtube.com", icon: "fab fa-youtube" }
    ]
};

// Mengatur judul halaman
document.title = settings.title;

// Mengatur video latar belakang
const backgroundVideo = document.querySelector('.background-video');
backgroundVideo.src = settings.backgroundVideo;

// Mengatur gambar slider
const slides = document.querySelector('.slides');
slides.innerHTML = settings.sliderImages.map(img => `<img src="${img}" alt="Slide Image">`).join('');

// Mengatur heading dan deskripsi
const heading = document.querySelector('.content-section h2');
heading.textContent = settings.heading;

const description = document.querySelector('.content-section p');
description.textContent = settings.description;

// Mengatur tombol aksi
const buttonSection = document.querySelector('.button-section');
buttonSection.innerHTML = settings.buttons.map(button => `
    <a href="${button.link}"><span>${button.text}</span></a>
`).join('');

// Mengatur ikon sosial media
const socialIcons = document.querySelector('.social-icons');
socialIcons.innerHTML = settings.socialIcons.map(icon => `
    <a href="${icon.url}" target="_blank"><i class="${icon.icon}"></i></a>
`).join('');

// Fungsi untuk slider
let currentIndex = 0;
const slideCount = settings.sliderImages.length;

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
    updateSlide();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
