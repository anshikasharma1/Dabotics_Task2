function startTime(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
//time format
if(hour <= 12){
    hour = hour
}
else{
    hour= hour - 12;
}
//add zero if less than 10
hour = concatZero(hour);
minutes = concatZero(minutes);
seconds = concatZero(seconds);
//add AM PM
var mode;
if(hour <= 11){
    mode ="PM"
}else{
    mode = "AM"
}

    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + ' ' + mode;
    setTimeout(startTime,500)
}

function concatZero(value){
    if(value < 10){
        value = '0' + value;
    }
    return value;
}


//screen
let screen = document.getElementById("screen");

//type to the screen
function press(numValue){
    if(screen.value == 0){
        screen.value = '';
    }
    screen.value += numValue;
}

//clear screen
function clearScreen(val){
    screen.value = val;
}
// delete keys
function backSpace(){
    const space = screen;
    screen.value= space.value.substring(0, space.value.length - 1);
}

//calculate function
function calculate(){
    if(screen.vaue != ''){
    try{
        clearScreen(eval(screen.value))
    }catch(err){
        clearScreen("Wrong Expression")
    }
}
}

//function to call the sin , cos and tan of an angle in DEG
function asin(){
    screen.value = Math.sin(screen.value * Math.PI / 180);
}
function acos(){
    screen.value = Math.cos(screen.value * Math.PI / 180);
}
function atan(){
    screen.value = Math.tan(screen.value * Math.PI / 180);
}
 
//function to call the asin , acos and atan of an angle in DEG
function invsin(){
    screen.value = Math.asin(screen.value) * (180 / Math.PI);
}
function invcos(){
    screen.value = Math.acos(screen.value) * (180 / Math.PI);
}
function invtan(){
    screen.value = Math.atan(screen.value) * (180 / Math.PI);
}

//function to call the nayural logarithm
function ln(){
    screen.value = Math.log(screen.value)
}
function log(){
    screen.value = Math.log10(screen.value)
}
 

//function for percentage
function percentage(){
    screen.value = (screen.value / 100)
}

// function for square, cube and square root
function square(){
    screen.value = Math.pow(screen.value, 2)
}
function cube(){
    screen.value = Math.pow(screen.value, 3)
}
function sqrt(){
    screen.value = Math.pow(screen.value)
}

//function for +/-
function plusminus(){
    var x = screen;
    var y = x.value;
    y = y* -1;
    x.value = y;
}

//Exp
function exp(){
    screen.value = Math.pow(10, screen.value)
}