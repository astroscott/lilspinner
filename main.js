let main_canvas = document.querySelector("#the_canvas");
let main_context = main_canvas.getContext("2d");
document.getElementById('the_canvas').setAttribute('width', 500);
document.getElementById('the_canvas').setAttribute('height', 500);
let canvas_width = main_canvas.width;
let canvas_height = main_canvas.height;

let angle = 0;

let requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

function drawCircle() {
    main_context.clearRect(0, 0, canvas_width, canvas_height);
    main_context.fillStyle = "#EEEEEE";
    main_context.fillRect(0, 0, canvas_width, canvas_height);
    
    main_context.beginPath();
    let radius = 100;
    main_context.arc(250, 250, radius, angle - 4, angle, false);
    main_context.closePath();
    
    main_context.strokeStyle = "#006699";
    main_context.stroke();
    angle += Math.PI / 128
    requestAnimationFrame(drawCircle);
}

drawCircle();