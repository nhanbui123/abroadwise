console.log("hello");

document.querySelectorAll(".about-team").forEach(div=>{
    div.addEventListener('click', (event) => {
        document.querySelectorAll(".about-team").forEach(item => item.classList.remove("active"));
        event.currentTarget.classList.add("active");
        let idAbout = event.currentTarget.dataset.id;

        document.querySelectorAll(".about-team-panel").forEach(panel=>{
            panel.classList.remove("active");
            if(panel.id == idAbout) {
                panel.classList.add("active");
            }
        })
    })
})