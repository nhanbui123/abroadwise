console.log("hello");

// Toggle menu mobile
const btnMenu = document.querySelector(".menu-mobi-icon");
const mobiMenu = document.querySelector(".menu-mobile");
btnMenu.addEventListener("click", function () {
    mobiMenu.classList.toggle("active");
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    document.body.classList.toggle("no-scroll");
});

// Xử lý panel khi click team
function updateTeamPanelBehavior() {
    const isMobile = window.matchMedia("(max-width: 991px)").matches;

    document.querySelectorAll(".about-team").forEach(div => {
        // Clone element để xoá các listener cũ
        const newDiv = div.cloneNode(true);
        div.parentNode.replaceChild(newDiv, div);

        newDiv.addEventListener('click', (event) => {
            const idAbout = event.currentTarget.dataset.id;

            if (isMobile) {
                document.querySelectorAll(".about-team-panel").forEach(panel => {
                    if (panel.id === idAbout) {
                        event.currentTarget.insertAdjacentElement("afterend", panel.closest(".about-team-panel-wrap"));
                        panel.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            } else {
                document.querySelectorAll(".about-team").forEach(item => item.classList.remove("active"));
                event.currentTarget.classList.add("active");

                document.querySelectorAll(".about-team-panel").forEach(panel => {
                    panel.classList.remove("active");
                    if (panel.id === idAbout) {
                        panel.classList.add("active");
                    }
                });
            }
        });
    });
}

// Gọi lần đầu khi trang load
updateTeamPanelBehavior();

// Gọi lại khi resize
window.addEventListener("resize", updateTeamPanelBehavior);
