document.addEventListener('DOMContentLoaded', function() {
    console.log("hello");

    // Lưu trữ HTML ban đầu của container
    const teamContainer = document.querySelector(".wrap-about-team");
    let originalHTML = teamContainer.innerHTML;

    // Xử lý click team member
    function handleTeamClick(event) {
        document.querySelectorAll(".about-team").forEach(item => item.classList.remove("active"));
        event.currentTarget.classList.add("active");
        let idAbout = event.currentTarget.dataset.id;

        document.querySelectorAll(".about-team-panel").forEach(panel => {
            panel.classList.remove("active");
            if (panel.id == idAbout) {
                panel.classList.add("active");
                
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

    // Xử lý menu mobile
    const btnMenu = document.querySelector(".menu-mobi-icon");
    const mobiMenu = document.querySelector(".menu-mobile");
    btnMenu.addEventListener("click", function() {
        mobiMenu.classList.toggle("active");
        const icon = this.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
        document.body.classList.toggle("no-scroll");
    });

    // Hàm reset về trạng thái ban đầu
    function resetToOriginalState() {
        // Khôi phục HTML ban đầu
        teamContainer.innerHTML = originalHTML;
        
        // Gán lại sự kiện click sau khi reset
        document.querySelectorAll(".about-team").forEach(div => {
            div.addEventListener('click', handleTeamClick);
        });
        
        // Đóng menu mobile
        if (mobiMenu) {
            mobiMenu.classList.remove("active");
            document.body.classList.remove("no-scroll");
            const icon = btnMenu.querySelector("i");
            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }
        }
    }

    // Hàm kiểm tra responsive
    function handleResponsive() {
        if (window.matchMedia("(max-width: 991px)").matches) {
            console.log("Mobile mode");
        } else {
            console.log("Desktop mode - Resetting to original state");
            resetToOriginalState();
        }
    }

    // Gán sự kiện
    window.addEventListener('resize', handleResponsive);
    document.querySelectorAll(".about-team").forEach(div => {
        div.addEventListener('click', handleTeamClick);
    });

    // Chạy lần đầu
    handleResponsive();
});