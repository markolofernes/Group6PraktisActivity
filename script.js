
let handycap = 0.1;
let points = 0;
let pointsPerEvade = 150;
let tiles = 16;
function addPoints(){

if (points>=(document.getElementById("numberMines").value)){ 
    clearalltilesWin();
    document.getElementById('Message').innerHTML = (document.getElementById("numberMines").value) + ' Burger Bombs cleared! You Win!';
    document.getElementById('Message').className = "vegas";
}
    document.getElementById('points').innerHTML = points * pointsPerEvade;
}

function removetile(tile){
    let mineBoolean = Math.random() > ((handycap) * (document.getElementById("handiCap").value)) ? true : false;
    if (mineBoolean==true) {
        tile.parentElement.style.visibility = 'hidden';
        points ++;
        document.getElementById("bombremain").innerText = (document.getElementById("numberMines").value) - points;
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
    document.getElementById("minesToEvade").innerText = "Get rid of " + clearTiles;
}
function clearalltiles(){
    new Audio("snd/boom.mp3").play();
    let bombleft =  document.getElementById("bombremain").innerText;
    
    let tileNo = 0;                      
    while (tileNo < tiles) {  
    document.getElementById("btntiles"+tileNo).className = 'disTiles';
    let posibility =  0.5;
        if (Math.random() >posibility){
            document.getElementById("btntiles"+tileNo).innerText = "🍔";
        }else{
            bombleft --;
            if(bombleft>0){
                document.getElementById("btntiles"+tileNo).innerText = "💣";
            }else{
                document.getElementById("btntiles"+tileNo).innerText = "🍔";
            }
            posibility = posibility + 0.5;
        }
    document.getElementById("btntiles"+tileNo).onclick = '';
    document.getElementById("btntiles"+tileNo).style = "border-radius:100px";
    tileNo ++;    
    }
    disableHandiCap();
    applynumberMines();

}

function clearalltilesWin(){
    let tileNo = 0;                      
    while (tileNo < tiles) {  
    document.getElementById("btntiles"+tileNo).className = 'disTiles';
    document.getElementById("btntiles"+tileNo).innerText = "🍔";
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
