var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;
var height = screen.height;

newWidth = width - 70;
newHeight = height - 300;

color = "black";
width_of_line = 2;

var last_positions_x;
var last_positions_y;

if (width < 999) {
    canvas.width = width;
    canvas.height = height;
}

canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_TouchMove);

function my_TouchMove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();


    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

canvas.addEventListener("mousedown", mymouseDown);

function mymouseDown(e) {
    color = document.getElementById("txtColor").value;
    width = document.getElementById("txtWidth").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", mymouseUp)

function mymouseUp(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", mymouseLeave)

function mymouseLeave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", mymouseMove)

function mymouseMove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_positions_x, last_positions_y)
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_positions_x = current_position_of_mouse_x;
    last_positions_y = current_position_of_mouse_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}