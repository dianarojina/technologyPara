// Задание 1
console.log("Задание 1")
const etherium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
    }
function getRate(etherium, key, val){
    return etherium[key] * val
}
console.log("10 etherium стоит: " + getRate(etherium, "usd", 10) + " в долларах")
console.log("10 etherium стоит: " + getRate(etherium, "rub", 10) + " в рублях")
console.log("10 etherium стоит: " + getRate(etherium, "eur", 10) + " в евро")
console.log("")

// Задание 2
console.log("Задание 2")
function getValues(a, b){
    a = a.toUpperCase()
    b = b.toUpperCase()
    const one = a
    const two = b
    const r = [...one, ...two]
    return r
}
console.log(getValues("JavaScript", "third"))

console.log("")

// Задание 3
console.log("Задание 3")
const adress = {
    street: 'Lenina',
    building: 1,
    flat: 40
    }
function getInfo(a){
    const values = Object.values(a)
    return values
}
console.log(getInfo(adress))
console.log("")

// Задание 4
console.log("Задание 4")
const obj1 = {
    id: 1,
    type: 'text',
    lenght: 20
}
const obj2 = {
    name: 'L',
    age: 7
}
function joinArrays(a, b){
    const newObject = {...a, ...b}
    return newObject
}
console.log(joinArrays(obj1, obj2))
console.log("")

// Задание 5
console.log("Задание 5")
class User3{
    constructor(Name, email) {
        this.Name = Name
        this.email = email
    }
    sayClass(){
        console.log("Новое имя пользователя: " + this.Name + ", и новый адрес: " + this.email)
    }
}
let user = new User3("Иван", "Ivan@gmail.com")
user.sayClass()
console.log("")

// Задание 6
console.log("Задание 6")
class User{
    constructor(id, type){
        this.id = id
        this.type = type
    }
    getId(){
        console.log("#" + this.id)
    }
    isAdmin(){
        if(this.type == "Admin"){ 
            console.log("true")
        }else{
            console.log("false")
        }
    }
}
console.log("User1")
const user1 = new User(100, "Admin")
user1.getId() // "#100"
user1.isAdmin() // true
console.log("User2")
const user2 = new User(217, "SimpleUser")
user2.getId() // "#217"
user2.isAdmin() // false
console.log("")

// Задание 7
console.log("Задание 7")
class AreaOfCircle{
    constructor(radius){
        this.radius = radius
    }
    get radius(){
        return this._radius
    }
    set radius(value){
        this._radius = Number.parseFloat(value * value * 3.14)
    }
}
const area = new AreaOfCircle(2)
console.log(area.radius) // 12.56
area.radius = 10
console.log(area.radius) // 314
console.log("")

// Задание 8
console.log("Задание 8")
class Course{
    constructor(grade){
        this.grade = grade
    }
    /*getGrade(){
        if(){
            return true
        }else{
            return false
        }
    }*/
    getCertificate(){
        if(this.grade == 4 | this.grade == 5){
            return ("Выдать сертификат")
        }else{
            return ("Курс не пройден" )
        }
    }
}
const course1 = new Course(5)
console.log(course1.getCertificate())
const course2 = new Course(3)
console.log(course2.getCertificate())