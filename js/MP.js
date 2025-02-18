const images = [
    { src: "../img/봄.jpg", desc: "아름다운 봄의 풍경입니다." },
    { src: "../img/여름.jpg", desc: "무더운 여름의 한 장면." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/겨울.jpg", desc: "눈 덮인 겨울 풍경." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },
    { src: "../img/가을.jpg", desc: "가을 단풍이 물든 거리." },

];

let currentIndex = 0;
const imagesPerPage = 4;

const galleryContainer = document.getElementById("galleryContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 모달 관련 요소
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.querySelector(".close");

function openModal(imgSrc, description) {
    modal.style.display = "flex"; // 모달 보이게 설정
    modalImage.src = imgSrc; // 이미지 변경
    modalDescription.textContent = description; // 설명 추가
}

function renderImages() {
    galleryContainer.innerHTML = "";

    for (let i = currentIndex; i < currentIndex + imagesPerPage && i < images.length; i++) {
        const imgBox = document.createElement("div");
        imgBox.classList.add("slide_box");

        const img = document.createElement("img");
        img.src = images[i].src;
        img.setAttribute("data-desc", images[i].desc);

        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImage.src = this.src;
            modalDescription.textContent = this.dataset.desc;
        });

        imgBox.appendChild(img);
        galleryContainer.appendChild(imgBox);
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + imagesPerPage >= images.length;
}

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

renderImages();
prevBtn.addEventListener("click", function () { currentIndex--; renderImages(); });
nextBtn.addEventListener("click", function () { currentIndex++; renderImages(); });
