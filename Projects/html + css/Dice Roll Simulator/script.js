const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const updateHistoryEl = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    // console.log(rollResult)
    const diceFace = getDiceFace(rollResult);
    // console.log(diceFace);
    // diceEl.textContent = diceFace
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    updateHistoryEl.innerHTML = "";  // Fixed the variable reference
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        updateHistoryEl.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1: return "&#9856;";
        case 2: return "&#9857;";
        case 3: return "&#9858;";
        case 4: return "&#9859;";
        case 5: return "&#9860;";
        case 6: return "&#9861;";
        default: return "";
    }
}

buttonEl.addEventListener("click", () => {
    // console.log("checked");
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});
