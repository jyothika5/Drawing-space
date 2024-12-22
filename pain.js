let canvas;
let currentTool = 'pencil';
let currentColor = '#000000';
let currentThickness = 5;

function setup() {
    const canvas_width = min(710, windowWidth * 0.9);
    canvas = createCanvas(canvas_width, 400);
    canvas.parent('bbox');
    background(255);
}

function draw() {
    if (mouseIsPressed) {
        strokeWeight(currentThickness);
        
        if (currentTool === 'pencil') {
            stroke(currentColor);
        } else if (currentTool === 'eraser') {
            stroke(255);
        }
        
        if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }
}

function windowResized() {
    const canvas_width = min(710, windowWidth * 0.9);
    resizeCanvas(canvas_width, 400);
}

document.getElementById('palatte').addEventListener('input', (event) => {
    currentColor = event.target.value;
    currentTool = 'pencil';
});

document.getElementById('thickness-slider').addEventListener('input', (event) => {
    currentThickness = event.target.value;
});

document.getElementById('pencil').addEventListener('click', () => {
    currentTool = 'pencil';
});

document.getElementById('eraser').addEventListener('click', () => {
    currentTool = 'eraser';
});

document.getElementById('del').addEventListener('click', () => {
    background(255);
});
