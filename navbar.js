fetch("navbar.html")
            .then((response) => response.text())
            .then((html) => {
                document.getElementById("navbar-placeholder").innerHTML = html;

                // Identifier la page active en fonction de l'URL
                const currentPage = window.location.pathname.split("/").pop(); // Récupère "index.html" ou "detail.html" etc...
                const navLinks = document.querySelectorAll(".nav-link");

                navLinks.forEach((link) => {
                    // Ajoutez la classe active si le href du lien correspond à la page actuelle
                    if (link.getAttribute("href") === currentPage) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active"); // Nettoyage des autres liens
                    }
                });
            });