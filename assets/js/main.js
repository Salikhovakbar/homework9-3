const h1El = document.getElementById("answer");
console.log(h1El);
alert("welcome to the site");
confirm("shall we find out a number");
let usersNumber = prompt("Enter your number");
function calculate(){
    h1El.innerHTML = usersNumber ** 2;
    console.log(usersNumber ** 2);
}
btn.addEventListener('click', calculate )