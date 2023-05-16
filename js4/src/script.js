console.log("Задание 1")
const getNickName = nik => { 
    let s = nik;
    if (s.startsWith("@") == false) {
        let s2 = "@"+s;
        return s2
    } else {
        return s
    }
}
//проверка 
if (getNickName("python.hub") === "@python.hub") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 2
console.log("Задание 2")
const getCurrency = price => {
    if (price.startsWith("$") == true){
        return "Доллар"
    } else if (price.endsWith("€") == true) {
        return "Евро"
    } else {
        return "Недоступно"
    }
}
//проверка
if ((getCurrency("$100") === "Доллар" && getCurrency("5€") === "Евро" && getCurrency("30 USD") === "Недоступно" )) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 3
console.log("Задание 3")
const getSlug = title => {
    let s = title.toLowerCase();
    let s2 = s.replace(" ", "-");
    let otv = s2.slice(0, 15);
    return otv
}
//проверка
if (getSlug("Red Bull Gives You Wings") === "red-bull gives " &&
    getSlug("Maybe it's Maybelline") ===    "maybe-it's mayb" &&
    getSlug("Just Do It") ===               "just-do it" &&
    getSlug("Challenge Everything") ===     "challenge-every") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 4
console.log("Задание 4")
const getTodosNumber = todos => { 
    let s = todos.split(",");
    return s.length
  }
//проверка
if (getTodosNumber("Купить хлеб,Купить сыр,Приготовить ужин") === 3 &&
    getTodosNumber("Установить кондиционер,Заправить картридж") === 2) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 5
console.log("Задание 5")
const data = [["Bitcoin", 40468],
["Ethereum", 3005],
["Solana", 106],
["Tether", 1]]
function renderTableRows(rows) {
    let [bit, ether, sol, tet] = data;
    rows = `<tr><td>${bit[0]}</td><td>${bit[1]}</td><td>${ether[0]}</td><td>${ether[1]}</td><td>${sol[0]}</td><td>${sol[1]}</td><td>${tet[0]}</td><td>${tet[1]}</td></tr>`
    return rows
}
//проверка
if (renderTableRows(data) === "<tr><td>Bitcoin</td><td>40468</td><td>Ethereum</td><td>3005</td><td>Solana</td><td>106</td><td>Tether</td><td>1</td></tr>") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 6
console.log("Задание 6")
const notAnExcellent = grades => {
    return grades.some(lvl => lvl < 3)
  }
//проверка
if (notAnExcellent([4, 2, 3, 5]) === true &&
    notAnExcellent([3, 4, 5, 3]) === false) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 7
console.log("Задание 7")
const demoteUser = roles => { 
    let s = roles.splice(0, 1);
    return roles
  }

const user = ["Admin", "Moderator", "Editor"]
//проверка
const diff = (a, b) => {
    if (a.length != b.length) return false; // Мас­си­вы раз­ной дли­ны не рав­ны

    for(var i = 0; i < a.length; i++) // Цикл по всем эле­мен­там
      if (a[i] !== b[i]) return false; // Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны
   
    return true; // Ина­че они рав­ны
}
if (diff(demoteUser(user), ["Moderator", "Editor"]) &&
    diff(demoteUser(user), ["Editor"])) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 8
console.log("Задание 8")
const multiply = nums => {
    const res = nums.reduce((acc, cur) => acc * cur);
    return res
}
//проверка
if (multiply([123, 78]) === 9594 &&
    multiply([504, 503, 807]) === 204584184) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 9
console.log("Задание 9")
const getUserInfo = block => {
    const [name, age] = block;
    let s = `Пользователю ${name} - ${age} лет.`;
    return s
  }
//проверка
if (getUserInfo(["Nina", 25]) === "Пользователю Nina - 25 лет." &&
    getUserInfo(["Anna", 11]) === "Пользователю Anna - 11 лет.") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 10
console.log("Задание 10")
const joinArrays = (array1, array2) => {
    const array = [...array1, ...array2];
    return array
  }
//проверка
if (diff(joinArrays(["Save", "Money"], ["Live", "Better"]), ['Save', 'Money', 'Live', 'Better']) &&
diff(joinArrays(['When', 'There'], ['Is', 'No', 'Tomorrow']), ['When', 'There', 'Is', 'No', 'Tomorrow'])){
    console.log("Правильно")
} else {
    console.log("Плохо")
}