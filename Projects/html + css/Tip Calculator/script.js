const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const billTip = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    // console.log("clicked")
    const billValue = billInput.value;
    // console.log(billValue);
    const tipValue = billTip.value;
    // console.log(tipValue);
    const totalValue = billValue * (1 + tipValue / 100);
    // console.log(totalValue);
    totalSpan.innerText = totalValue.toFixed(2);

    




     

}

btnEl.addEventListener("click", calculateTotal)