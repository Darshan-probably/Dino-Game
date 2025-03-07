const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 300;

let dino = { x: 50, y: 200, width: 50, height: 50, velocityY: 0, jumping: false };
let cactus = { x: 800, y: 200, width: 40, height: 50 };
let gravity = 1.5;

const dinoImg = new Image();
dinoImg.src = "dino.png";  // No folder, so direct reference

const cactusImg = new Image();
cactusImg.src = "cactus.png";  // No folder, so direct reference

function update() {
    if (dino.jumping) {
        dino.velocityY += gravity;
        dino.y += dino.velocityY;
        if (dino.y >= 200) {
            dino.y = 200;
            dino.jumping = false;
        }
    }

    cactus.x -= 5;
    if (cactus.x < -40) cactus.x = 800;  // Reset cactus position

    draw();
    requestAnimationFrame(update);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    ctx.drawImage(cactusImg, cactus.x, cactus.y, cactus.width, cactus.height);
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !dino.jumping) {
        dino.velocityY = -20;
        dino.jumping = true;
    }
});

update();
