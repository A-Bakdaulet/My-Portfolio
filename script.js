document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".buttons a, footer a").forEach(anchor => {
                anchor.addEventListener("click", function (e) {
                    // проверяем что ссылка ведет на якорь (например #about)
                    if (this.getAttribute("href").startsWith("#")) {
                        e.preventDefault();
                        const targetId = this.getAttribute("href").substring(1);
                        const targetSection = document.getElementById(targetId);
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: "smooth" });
                        }
                    }
                });
            });
        });