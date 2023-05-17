//1---------------
const mas = document.querySelector('#inputNumb')
const result = document.querySelector('#resultFirstExercise')

function sumArray(arg) {
    let s = arg.split(" ");
    s = s.map(e => +e);
    let k = 0;
    s.forEach((num) => {
        k = k + num
      });
    return k.toString()
}

mas.addEventListener("input", () => {
    result.textContent = sumArray(mas.value)
})

//2---------------
const mas2 = document.querySelector('#inputNumb2')
const result2 = document.querySelector('#resultFirstExercise2')

function getAboveZero(arg) {
    let s = arg.split(" ");
    s = s.map(e => +e);
    let newM = [];
    s.forEach((num) => {
        if (num > 0) {
            newM.push(num);
        }
      });
    let otv = newM.join(" ");
    return otv.toString()
}

mas2.addEventListener("input", () => {
    result2.textContent = getAboveZero(mas2.value)
})

//3---------------
const mas3 = document.querySelector('#inputNumb3')
const mas31 = document.querySelector('#inputNumb3-1')
const result3 = document.querySelector('#resultFirstExercise3')

function getPonies(arg) {
    let masName = arg.split(" ");
    if (masName.includes(mas31.value) == true) {
        let s = mas31.value;
        return s
    } else {
        return false
    }
}

mas3.addEventListener("input", () => {
    result3.textContent = getPonies(mas3.value)
})

//4---------------
const mas4 = document.querySelector('#inputNumb4')
const mas41 = document.querySelector('#inputNumb4-1')
const result4 = document.querySelector('#resultFirstExercise4')

function isTxIncluded(arg) {
    let masName1 = arg.split(" ");
    if (masName1.includes(mas41.value) == true) {
        return "true"
    } else {
        return "false"
    }
}

mas4.addEventListener("input", () => {
    result4.textContent = isTxIncluded(mas4.value)
})

//5---------------------
const mas5 = document.querySelector('#inputNumb5')
const result5 = document.querySelector('#resultFirstExercise5')

function getSizes(arg) {
    let slo = arg.split(" ");
    let k = [];
    //return "ddd"
    slo.forEach((num5) => k.push(slo[num5].length));
    return k.toString()
}

mas5.addEventListener("input", () => {
    result5.textContent = getSizes(mas5.value)
})