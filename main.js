var c1 = document.getElementById("myCanvas");
var ctx= c1.getContext("2d");

color = "red"; 
width = 2;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

c1.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    width = document.getElementById("width").value;
    console.log(width);
    //addition activity ends
    
     mouse_x = e.clientX - c1.offsetLeft;
     mouse_y = e.clientY - c1.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, c1.width, c1.height);
}