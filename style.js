console.log("hello");

// Xử lý click team member
function handleTeamClick(event) {
    document.querySelectorAll(".about-team").forEach(item => item.classList.remove("active"));
    event.currentTarget.classList.add("active");
    let idAbout = event.currentTarget.dataset.id;

    document.querySelectorAll(".about-team-panel").forEach(panel => {
        panel.classList.remove("active");
        if (panel.id == idAbout) {
            panel.classList.add("active");
            
            // Nếu là mobile thì thực hiện scroll
            if (window.matchMedia("(max-width: 991px)").matches) {
                event.currentTarget.insertAdjacentElement("afterend", panel.closest(".about-team-panel-wrap"));
                panel.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Gán sự kiện click cho team member
document.querySelectorAll(".about-team").forEach(div => {
    div.addEventListener('click', handleTeamClick);
});

// Xử lý menu mobile
const btnMenu = document.querySelector(".menu-mobi-icon");
const mobiMenu = document.querySelector(".menu-mobile");
console.log(btnMenu);
btnMenu.addEventListener("click", function () {
    mobiMenu.classList.toggle("active");
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    document.body.classList.toggle("no-scroll");
});

// Hàm kiểm tra và xử lý responsive
function handleResponsive() {
    if (window.matchMedia("(max-width: 991px)").matches) {
        // Logic dành cho mobile
        console.log("Mobile mode");
    } else {
        // Logic dành cho desktop
        console.log("Desktop mode");
        
        // Reset các panel về vị trí ban đầu nếu cần
        document.querySelectorAll(".about-team-panel-wrap").forEach(wrap => {
            document.querySelector(".about-team-container").appendChild(wrap);
        });
    }
}

// Gán sự kiện resize
window.addEventListener('resize', handleResponsive);

// Chạy lần đầu khi tải trang
handleResponsive();