const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
header.classList.add("scrolled");
} else {
header.classList.remove("scrolled");
}
});

menuBtn.addEventListener("click", () => {
nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {

```
link.addEventListener("click", () => {
    nav.classList.remove("open");
});
```

});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

```
let currentSection = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {
        currentSection = section.getAttribute("id");
    }

});

navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
    }

});
```

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

```
anchor.addEventListener("click", function(event) {

    const target = document.querySelector(
        this.getAttribute("href")
    );

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
        behavior: "smooth"
    });

});
```

});
