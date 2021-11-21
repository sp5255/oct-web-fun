
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let pat1 = prompt("Input for Pattern 1");
console.log(pat1);
if (Number.isNaN(Number(pat1))) alert("input a number");
else {
    for (let i = 0; i < Number(pat1); i++) {
        for (let j = 0; j < 8; j++) p1.innerHTML += "*";
        p1.innerHTML += "<br />";
    }
}

let pat2 = prompt("Input for pattern 2");

if (Number.isNaN(Number(pat2))) alert("input a number");
else {
    for (let i = 0; i < Number(pat2); i++) {
        for (let j = 0; j < i; j++) p2.innerHTML += "*";
        p2.innerHTML += "<br/>";
    }
}
