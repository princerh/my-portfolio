const repo = document.getElementById("repo");
const down = document.getElementById("down");

const toggleClasses = () => {
    repo.classList.toggle("scale-110");
    repo.classList.toggle("text-pink-600");

    // down.classList.toggle("mr-5");
    down.classList.toggle("text-red-500");
    down.classList.toggle("transform");
    down.classList.toggle("scale-110");
}

setInterval(toggleClasses, 500);
