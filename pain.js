let canvas;
let currentTool = 'pencil';
let currentColor = '#000000';
let currentThickness = 2;


function setup() {
    const canvasWidth = Math.min(710, windowWidth * 0.9);
    canvas = createCanvas(canvasWidth, 400);
    canvas.parent('bbox');
    background(255);
}
function draw() {
    if (mouseIsPressed) {
        strokeWeight(currentThickness);

        if (currentTool === 'pencil') {
            stroke(currentColor);
        } else if (currentTool === 'eraser') {
            stroke(255); // White color for eraser
        }

        // Ensure drawing stays within canvas bounds
        if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }
}

function windowResized() {
    const canvasWidth = Math.min(710, windowWidth * 0.9);
    resizeCanvas(canvasWidth, 400);
}

document.getElementById('color-picker').addEventListener('input', (event) => {
    currentColor = event.target.value;
    currentTool = 'pencil'; // Set to pencil after selecting a color
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
    background(255); // Clear canvas
});
