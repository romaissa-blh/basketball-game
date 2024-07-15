let Home = document.getElementById("home")
let Guest = document.getElementById("guest")
let score = 0 , score1 = 0
function plusone(){
    score += 1
    Home.textContent = score
}
function plustwo(){
    score += 2
    Home.textContent = score
}
function plusthree(){
    score += 3
    Home.textContent = score
}
function plusgone(){
    score1 += 1
    Guest.textContent = score1
}
function plusgtwo(){
    score1 += 2
    Guest.textContent = score1
}
function plusgthree(){
    score1 += 3
    Guest.textContent = score1
}