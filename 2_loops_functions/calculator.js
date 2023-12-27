const result = document.getElementById('result');

function calculate() {
    for (let index = 1; index < 10; index++) {
        const newResult = `${index} X ${index} = ${index}*${index}`;
        // result.textContent += `${newResult}\n`;
        console.log(newResult);

    }
    // result.textContent = "\nFinished";
    result.textContent = result.textContent + newResult;
}

const calculateBtn = document.getElementById("calculate");
const clear = document.getElementById("clear");

calculateBtn.addEventListener('click', calculate);
clear.addEventListener('click', () => result.textContent = "");