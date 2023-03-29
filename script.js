const c = document.getElementById('mainCanvas');
var ctx = c.getContext("2d");



window.onload = function(){resizeCanvas()}
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
    ctx.fillText('Save to ur Computer', 950, 500);
}
