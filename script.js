function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

/* OPEN IMAGE */
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

    document.body.style.overflow = "hidden";
}

/* CLOSE IMAGE */
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}

/* VIDEO */
const video = document.getElementById("gmeetVideo");
const playBtn = document.getElementById("playBtn");

/* sync UI only */
function updateButton() {
    if (!video || !playBtn) return;

    playBtn.style.display = video.paused ? "block" : "none";
}

/* click overlay ONLY toggles video */
if (video && playBtn) {
    playBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    video.addEventListener("play", updateButton);
    video.addEventListener("pause", updateButton);
    video.addEventListener("ended", updateButton);
}

/* DROPDOWN CLICK TOGGLE */
function toggleDropdown(event) {
    event.stopPropagation();

    const dropdown = document.getElementById("moreDropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

/* CLOSE DROPDOWN WHEN CLICKING OUTSIDE */
window.addEventListener("click", function (event) {
    const dropdown = document.getElementById("moreDropdown");

    if (
        dropdown &&
        !event.target.closest(".dropdown")
    ) {
        dropdown.classList.remove("show");
    }
});

const sections = document.querySelectorAll("section.container");

window.addEventListener("scroll", () => {
    let current = 0;

    sections.forEach((sec, index) => {
        if (scrollY >= sec.offsetTop - 400) {
            current = index;
        }
    });

    sections.forEach((sec, index) => {
        const lines = sec.querySelectorAll(".step-line");

        lines.forEach((line, i) => {
            line.classList.remove("active");

            if (i === current) {
                line.classList.add("active");
            }
        });
    });
});