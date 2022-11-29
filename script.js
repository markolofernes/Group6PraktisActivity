var handycap = 0.1;
let points = 0;
let pointsPerEvade = 150;
function addPoints(){

if (points>=(document.getElementById("numberMines").value)){
    clearalltiles();
    document.getElementById('Message').innerHTML = (document.getElementById("numberMines").value) + ' Mines evaded! You Win!';
    document.getElementById('Message').style = "color:blue";
}
    document.getElementById('points').innerHTML = ' Total Points: ' + points * pointsPerEvade;
}

function removetile(tile){
    let mineBoolean = Math.random() > ((handycap) * (document.getElementById("handiCap").value)) ? true : false;
    if (mineBoolean==true) {
        tile.parentElement.style.visibility = 'hidden';
        points ++;
    }else{
        document.getElementById('Message').innerHTML = "G A M E   O V E R !";
        document.getElementById('Message').style = "color:red";
        tile.parentElement.style = "background:red;border-radius:100px;";
        tile.getElementsByClassName("btntile").className = "mineReveal";
        clearalltiles();
    }
}
function refreshPage(){
window.location.reload();
}

function applyHandyCap(){
    var handycap = (document.getElementById("handiCap").value * 0.1);
}

function changeMineno(){
    var clearTiles = (document.getElementById("numberMines").value);
    document.getElementById("minesToEvade").innerText = "Evade all " + clearTiles + " mines!";
}
function clearalltiles(){
    let tileNo = 0;                      
    while (tileNo < 16) {  
    document.getElementById("btntiles"+tileNo).className = 'disTiles';
    document.getElementById("btntiles"+tileNo).innerText = "X";
    document.getElementById("btntiles"+tileNo).onclick = '';
    document.getElementById("btntiles"+tileNo).style = "border-radius:100px";
    tileNo ++;    
    }
    disableHandiCap();
    applynumberMines();
}
function disableHandiCap() {
    document.getElementById("handiCap").disabled = true;
    document.getElementById("applyHndCap").disabled = true;
}
function applynumberMines() {
    document.getElementById("numberMines").disabled = true;
    document.getElementById("applyHndCap2").disabled = true;
}