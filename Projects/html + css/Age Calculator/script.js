const btnE1 = document.getElementById("btn")
const birthdayE1 = document.getElementById("birthday")
const resultEl = document.getElementById('result')

function calculateAge() {
    const birthdayValue = birthdayE1.value;
    // console.log(birthdayValue)
    if (birthdayValue === "") {
        alert("Please enter your birthday")
    } else{
        const age = getAge(birthdayValue)
        // console.log(age);
        resultEl.innerText = `your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    // console.log(currentDate);
    // console.log(birthdayDate.getFullYear());
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    // console.log(age);
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    // console.log(month);

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }

    return age;



}

btnE1.addEventListener("click", calculateAge)