function setup(){
    canvas=createCanvas(550,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    filter_color="";
}
function draw(){
    image(video,0,0,550,480);
    tint(filter_color);
}
function apply_filter(){
    filter_color=document.getElementById("colorname").value;
}
function take_snapshot(){
    save("ME.png");
}