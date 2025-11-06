// javaScript sheet!
// DOM variables
const container = document.querySelector(".grid-container");
const resetArea = document.querySelector(".reset-area");
const resetButton = document.querySelector(".reset");
const resizeButton = document.querySelector(".resize");

// Grid creator!

// Each pixel is 12px in total size, so for width and height, use 12px as the base unit for each grid block!
function createGrid(num) {
    if (num >= 100) {
        console.log("TOO MANY ELEMENTS!");
    } else {
        const mathResult = num * num;
        const containerSize = num * 12;
        container.style.width = containerSize + "px";
        container.style.height = containerSize + "px";
        for (i = 0; i < mathResult; i++) {
            const grid = document.createElement("div");
            grid.className = "grid";
            container.appendChild(grid);
        }
    }
}

// Eventlistener for changing style of grids!
function gridEvent() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "purple";

    })
})
}
// Resets the background-color of the grids back to white 
resetButton.addEventListener("click", (event) => {
        const grids = document.querySelectorAll(".grid");
        grids.forEach((grid) => {
            grid.setAttribute("style", "background-color: white;");
        })
});

// When someone clicks the "resize button"
resizeButton.addEventListener("click", () => {
    reset();
    const answer = prompt("What size grid would you like to draw on?", "");
    if (answer === null) {
        alert("You cancled! Making default size grid!")
        createGrid(16);
    } else {
        createGrid(+answer);
    }
    gridEvent();
})

// deletes existing grid to replace when resize is clicked.
function reset() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.remove();
    })
}
// Running area:
createGrid(16);
gridEvent();
