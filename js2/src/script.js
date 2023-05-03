//1---------------
const number = document.querySelector('#inputNumb')
const result = document.querySelector('#resultFirstExercise')

function getNumb(arg1) {
    let a = Number.parseInt(arg1, 10) + 1;
    return a.toString()
}

number.addEventListener("input", () => {
    result.textContent = getNumb(number.value)
})

//2---------------
const number2 = document.querySelector('#inputNumb2')
const number21 = document.querySelector('#inputNumb2-1')
const result2 = document.querySelector('#resultFirstExercise2')

function getRemainder(a) {
    let b = Number.parseInt(a,10);
    let c = Number.parseInt(num2,10);
    let otv = b % c;
    return otv.toString()
}

number2.addEventListener("input", () => {
    result2.textContent = getRemainder(number2.value)
})
number21.addEventListener("input", () => {
    num2 = number21.value;
})

//3---------------
const number3 = document.querySelector('#inputNumb3')
const result3 = document.querySelector('#resultFirstExercise3')

function faceControl(arg1) {
    const a = Number.parseInt(arg1, 10)
    if (a >= 18) {
        return 'Welcome bro!'
    } else {
        return 'Sorry bro...'
    }
}
number3.addEventListener("input", () => {
    result3.textContent = faceControl(number3.value)
})
//4----------------
const number4 = document.querySelector('#inputNumb4')
const result4 = document.querySelector('#resultFirstExercise4')

function getNextAge(age) {
    if (age != ""){
        let a = Number.parseInt(age, 10) + 1;
        return a.toString()
    } else {
        return 0;
    }
}

number4.addEventListener("input", () => {
    result4.textContent = getNextAge(number4.value)
})
//5--------------
canRide
const number5 = document.querySelector('#inputNumb5')
const result5 = document.querySelector('#resultFirstExercise5')

function canRide(rost) {
    return rost >= 140
}

number5.addEventListener("input", () => {
    result5.textContent = canRide(number5.value)
})