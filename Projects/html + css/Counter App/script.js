const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        // console.log("Add")
        count.innerHTML++;
        setColour();
    }
    if (e.target.classList.contains("subtract")) {
        // console.log("Subtract")
        count.innerHTML--;
        setColour();

    }
    if (e.target.classList.contains("reset")) {
        // console.log("Reset")
        count.innerHTML = 0;
        setColour();

    }
})
function setColour() {

    if (count.innerHTML > 0) {
        count.style.color = "blue"
    } else if (count.innerHTML < 0) {
        count.style.color = "red"
    } else {
        count.style.color = "blue;"
    }
}

// add.addEventListener("click", () => {
//     count.innerHTML++;
// });
// sub.addEventListener("click", () => {
//     count.innerHTML--;
// });
// resetCount.addEventListener("click", () => {
//     count.innerHTML = 0;
// });


