//Setting Title of Color Picker - Useless Detail to waste time
function set_Title()
{
    cPicker = document.getElementById('colorPicker');
    drawColor = cPicker.value;
    cPicker.title = drawColor;
}
//Sets Title of Width Slider to its value - Useless Detail to waste time
function set_Title1()
{
    wSlider = document.getElementById('widSlid');
    lineWidth = wSlider.value;
    wSlider.title = lineWidth;
}


function setMode(a, b)
{
    a.style.color = 'var(--hoverColor)'
    b.style.color = 'black'
}

function changeMode(a)
{
    if(a == 1)
    {
        eraseMode = false;
    }
    else if(a == 2)
    {
        eraseMode = true;
    }
}
