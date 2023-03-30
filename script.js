/** @type {HTMLCanvasElement} */
const c = document.getElementById('mainCanvas');
var ctx = c.getContext("2d");
start_draw = false;


window.onload = function(){resizeCanvas(); }
function resizeCanvas()
{
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    writePH()
}

//Place Holder Text
function writePH()
{
    ctx.font = "30px Cursive";
    ctx.fillText("Your ideas here", 510, 260);

    ctx.font = "20px Cursive"
    ctx.fillText('Save to ur Computer', 1090, 550);

    ctx.beginPath();
    ctx.arc(1290, 560, 50, Math.PI / 2, Math.PI, false);
    ctx.lineWidth = 2; 
    ctx.stroke();
}

//Drawing

let is_drawing = false;
let lineWidth = '2';
let color = 'red';


c.addEventListener('mousedown', start);
c.addEventListener('mousemove', draw);
c.addEventListener('touchstart', start);
c.addEventListener('touchmove', draw);
c.addEventListener("mouseup", stopDraw);
c.addEventListener('touchcancel', stopDraw);



function start(e)
{
        if(!start_draw)
        {
            ctx.clearRect(0, 0, c.width, c.height);
            start_draw = true;
        }

        is_drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    
    
        if(!start_draw){ctx.clearRect(0, 0, c.width, c.height);
            start_draw = true;}
        
        is_drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    
}

function draw(e)
{
    if(is_drawing)
    {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = lineWidth;
        ctx.color = 'red';
        ctx.stroke();
    }

    else if(is_drawing)
    {
        ctx.lineTo(e.clientX, e.clientY);
    }
}

function stopDraw(){is_drawing = false;}

//Saving Canvas into downloads folder
function Save()
{
    var URLdata = c.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'download.png';
    link.href = URLdata;
    link.click();
}

// Clearing
function Clear()
{
    ctx.clearRect(0, 0, c.width, c.height);
}




