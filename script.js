document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("click", function () {
            alert("Kamu mengklik: " + this.innerText);
        });
    });
});
