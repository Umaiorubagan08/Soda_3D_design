

    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.textContent = "࣪ ִֶָ☾."; 
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeIcon.textContent = "࣪ ִֶָ☾."; 
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.textContent = "☀︎"; 
            localStorage.setItem("theme", "light");
        }
    });
