
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let count = 0

function homeIncrementOne() {
    
    count++
    scoreHome.textContent = count
}


function homeIncrementTwo() {
    count += 2
    scoreHome.textContent = count
}

function homeIncrementThree() {
    count += 3
    scoreHome.textContent = count
}

function guestIncrement1() {
    count++
    scoreGuest.textContent = count
}
function guestIncrement2() {
    count += 2
    scoreGuest.textContent = count
}
function guestIncrement3() {
    count += 3
    scoreGuest.textContent = count
}