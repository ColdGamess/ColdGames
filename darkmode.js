const body = document.querySelector("body")
const toggle_particles = document.querySelector(".toggle-particles")

toggle_particles.addEventListener("click", () => {
    toggle_particles.classList.toggle("enabled");
    body.classList.toggle("dark");
})