function prelaod(){

}

function setup(){

 canvas=createCanvas(400,400);
//canvas.center();
canvas.position(500,100);

video = createCapture(VIDEO);
video.hide();


tint_color = "";

}

function draw(){

    image(video,0,0,400,400);
    tint(tint_color);

}


function apply_filter(){
    tint_color = document.getElementById("filter").value;
}

function take_snapshot(){
save("my_filtered_selfie.png");
    
}