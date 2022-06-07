let SCHOOL_NAME = "Dalida's school";
const FREE_PLACES = 25;
let isNewSchool = true;
let desk = null;
let cabinet  = {
    name: "Calculus",
    quality: "new",
}
cabinet["number"] = 325;
cabinet.color = "blue";
delete cabinet.color;
cabinet.print = function() {
    console.log("Это кабинет " + this.name + " под номером " + this.number);
}
for(let i in cabinet){
    console.log(i);
}

let security_guards = ["Sanzhar", "Ruslan", "Emir"];
let administration = ["Dalida", "Aidana", "Aruzhan", "Aknur", "Aidar", "Arman", "Beknar", "Samat", "Abylay", "Aidyn", "Rustam", "Yerkebulan", "Yeskhat", "Zhanibek", "Yerlan"]
console.log(security_guards.length);
security_guards.push("Erzhan");
let LAST_SECURITY = security_guards.pop();
security_guards.unshift("Arthur");
let FIRST_SECURITY =    security_guards.shift();
let people = administration.concat(security_guards);
if ("01" == 1){
    console.log("Dalida's school is the best");
}
if ("01" === 1){
    console.log("Dalida's school is bad");
}
let isTheBest = 1 == "1" ? "true" : "false";

let Dalidas = administration.filter((boss) => boss === "Dalida");
let administration_upper = administration.map((person) => person.toUpperCase());

cabinet.floor = 2;
function go(name, name_cabinet, ...otherInfo){
    return `${name} goes to ${name_cabinet} that are on the ${otherInfo} floors`;
}

const fio = ["Basar", "Baishev"];
const aboutMe = ["Ya", ...fio, "uchenik nfactorial"];

console.log(...administration.slice(3, 6));

let emir = "Emir";
if(emir){
    console.log(emir);
}

let x = 2;
switch(x){
    case 1:
        console.log("Bad");
        break;
    case 2:
        console.log("U r the best");
        break;
    case 3:
        console.log("I am stupid"); 
        break;
    default:
        console.log("Emir is good");
        break;
}


for(let i of fio){
    console.log(i);
}

for(let i = 0; i < administration.length; i++){
    console.log(administration[i]);
}
let k = 10;
let sm1 = 0;
while(k >= 0){
    sm1 += k;
    k -= 2;
}

let i = 10;
let sm2 = 0;
do{
    sm2 += i;
    i -= 3;
} while(i > 0);

let countAdministration = function(){
    return administration.length;
} 

let countSecurityGuard = () => {
    return security_guards.length;
}

let a = [1, 2, 3, 4];
let [one, two, ...three] = a;
console.log(one, two, three);

export{countAdministration, countSecurityGuard};
export default administration;


