/*let year = promt("HOw old are you&")

if (year < 2000){
    alert("You are Adult")
}else if (year == 2000){
    alert("You are special")
}else{
    alert("Yor are child")
}

let acsess = (year < 2000) ? alert("You are Adult") : (year == 2000) ? alert("You are special") : alert("Yor are child")*/



/*
let name = promt ("Enter the name of JScript")

let acsess = (name == ECMAScript) ? console.log("True") : console.log("No,ECMAScript")
*/


/*
let num = prompt("Enter Number")

if (num >= 14 && num <= 91){
    console.log("Num is in Array")
}else {
    console.log("Num isn't in Array")
}
*/


let login = prompt("Enter Login")

if (login == 'admin'){
    let password = prompt("Enter Password")
    if (password == '12345'){
        alert ("You are in system.")
    } else{
        if (password == undefined){
            alert ("Denied.")
        }else{
        alert("Not right PassWord.")
        }
    }
}else{
    if (login == undefined){
        alert ("Denied")
    }else{
    alert("Who are you?")
    }
}