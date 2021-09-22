console.log("Hello World");
let counter = 5000;
function startTimer() {
    setTimeout(() => {
    alert("You're done!")
    }, 5000);
};

function backwardsCount() {
    setInterval(() => {
counter-- 
console.log(counter)
}, 1000)
};