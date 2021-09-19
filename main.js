object = "";
status = "";

function setup()
{
    canvas = createCanvas(300,300);
    canvas.position(545,350)
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    console.log("Start Button have been pressed");
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object = document.getElementById("name_of_object").value;
}

function modelLoaded()
{
    console.log()
    status = true; 
}

function draw()
{
    image(video,0,0,300,300)
}

