const images = [
    "../img/봄.jpg", "../img/여름.jpg", "../img/가을.jpg", "../img/겨울.jpg",
    "../img/비행기.jpg", "../img/제주도 바다.jpg", "../img/제주도 바다2.jpg", "../img/제주도 이호테우해변3.jpg",
    "../img/제주도 이호테우해번.jpg", "../img/팝업스토어1.jpg", "../img/팝업스토어2.jpg", "../img/팝업스토어3.jpg",
    "../img/크리스마스.jpg", "../img/해변.jpg", "../img/찰리 푸스.jpg", "../img/한강.jpg"
]
let currentIndex = 0; /*현재 화면에 표시되는 첫 번째 이미지의 인덱스*/
const imagesPerPage = 4; /*한 번에 화면에 표시되는 이미지의 개수*/

/*HTML의 요소를 가져옴*/
const galleryContainer = document.getElementById("galleryContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderImages() {
    galleryContainer.innerHTML = ""; /*기존 이미지 초기화*/

    for (let i = currentIndex; i < currentIndex + imagesPerPage && i < images.length; i++) {
        const imgBox = document.createElement("div");
        imgBox.classList.add("slide_box");

        const img = document.createElement("img");
        img.src = images[i];

        imgBox.appendChild(img);
        galleryContainer.appendChild(imgBox);
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + imagesPerPage >= images.length;
}

function nextImages() {
    if (currentIndex + 1 + imagesPerPage - 1 < images.length) {
        currentIndex += 1;
        renderImages();
    }
}

function prevImages() {
    if (currentIndex - 1 >= 0) {
        currentIndex -= 1;
        renderImages();
    }
}

renderImages();

