var handycap = (document.getElementById("handiCap").value * 0.1);
let points = 0;
let clearTiles = 5;
function addPoints(){
points += 1;



if (points>=clearTiles){
    clearalltiles();
    document.getElementById('Message').innerHTML = clearTiles + ' Mines evaded! You Win!';
    document.getElementById('Message').style = "color:blue";
    // refreshPage();
}
    document.getElementById('points').innerHTML = ' Total Points: ' + points;
}

function removetile(tile){
    const test1 = Math.random() > handycap ? true : false;
    if (test1==true) {
        tile.parentElement.style.visibility = 'hidden';
    }else{
        clearalltiles();
        document.getElementById('Message').innerHTML = "G A M E   O V E R !";
        document.getElementById('Message').style = "color:red";
    }
}
function refreshPage(){
window.location.reload();
}

function applyHandyCap(){
    var handycap = (document.getElementById("handiCap").value * 0.1);
}

function applynumberMines(){
    var clearTiles = (document.getElementById("numberMines").value);
    document.getElementById("minesToEvade").innerText = "Evade all " + clearTiles + " mines!";
}
function clearalltiles(){
    let tileNo = 0;                      
    while (tileNo < 16) {  
    document.getElementById("btntiles"+tileNo).innerText = "X";
    document.getElementById("btntiles"+tileNo).className = 'disTiles';
    document.getElementById("btntiles"+tileNo).onclick = '';
    tileNo ++;    
    }
}