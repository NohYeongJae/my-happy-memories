const images = [
    {src: "./img/봄.jpg", desc: "서산 해미읍성에서 찍은 벚꽃"},
    {src: "./img/여름.jpg", desc: "집 앞 거리 비가 오는 여름"},
    {src: "./img/가을.jpg", desc: "산책 길 중 잘 익은 단풍"},
    {src: "./img/겨울.jpg", desc: "학교에서 마지막 겨울."},
    {src: "./img/비행기.jpg", desc: "대학교 동기들과 제주도 여행"},
    {src: "./img/제주도 바다.jpg", desc: "제주도 노을과 해변"},
    {src: "./img/제주도 바다2.jpg", desc: "제주도 등대"},
    {src: "./img/제주도 이호테우해변3.jpg", desc: "이호테우해변 방파제"},
    {src: "./img/제주도 이호테우해번.jpg", desc: "이호테우해변의 푸른 바다"},
    {src: "./img/팝업스토어1.jpg", desc: "코카콜라 해변"},
    {src: "./img/팝업스토어2.jpg", desc: "코카콜라 정글"},
    {src: "./img/팝업스토어3.jpg", desc: "코카콜라 하늘"},
    {src: "./img/크리스마스.jpg", desc: "크리스마스 속 트리와 산타"},
    {src: "./img/해변.jpg", desc: "영종도 겨울 해변"},
    {src: "./img/찰리 푸스.jpg", desc: "찰리 푸스 내한 공연"},
    {src: "./img/한강.jpg", desc: "도심 속의 건물들"},

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

// 모달 생성
function openmodal(Src, description) {
    modal.style.display = "flex"; // 모달 보이게 설정
    modalImage.src = Src; // 이미지 변경
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
        //이미지 슬라이드의 사진들 모달 생성
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
prevBtn.addEventListener("click", function () {
    currentIndex--;
    renderImages();
});
nextBtn.addEventListener("click", function () {
    currentIndex++;
    renderImages();
});
