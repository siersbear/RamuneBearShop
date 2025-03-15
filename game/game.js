// Setup Canvas
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Game Variables
let health = 100;
let powerUp = 0;
let player = {
    x: 100,
    y: 100,
    width: 120,
    height: 120,
    speed: 2,
    velocityX: 0,
    velocityY: 0,
    sprite: new Image(),
    currentAction: 'idle', // Tracks the current animation state (idle, walking, jumping, attacking)
    isJumping: false,
    facingRight: true  // Track the facing direction of the sprite (true = right, false = left)
};

let floor = {
    x: 0,
    y: canvas.height - 40,
    width: canvas.width,
    height: 70,
    image: new Image()
};

floor.image.src = 'images/floor.png';  // Load the floor image

// Load Ramunebear Sprites for different actions (Idle, Jumping, Walking, Attacking)
let idleSprite = new Image();
let walkSprite = new Image();
let jumpSprite = new Image();
let attackSprite = new Image();

idleSprite.src = 'images/idle_ramunebear.gif';
walkSprite.src = 'images/walking_ramunebear.gif';
jumpSprite.src = 'images/jumping_ramunebear.gif';
attackSprite.src = 'images/attack_ramunebear.gif';

// Keyboard controls
const keys = {
    up: false,
    left: false,
    down: false,
    right: false,
    space: false,
    shift: false,
    e: false,
    q: false
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'w') keys.up = true;
    if (e.key === 'a') keys.left = true;
    if (e.key === 's') keys.down = true;
    if (e.key === 'd') keys.right = true;
    if (e.key === ' ') keys.space = true;
    if (e.key === 'Shift') keys.shift = true;
    if (e.key === 'e') keys.e = true;
    if (e.key === 'q') keys.q = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'w') keys.up = false;
    if (e.key === 'a') keys.left = false;
    if (e.key === 's') keys.down = false;
    if (e.key === 'd') keys.right = false;
    if (e.key === ' ') keys.space = false;
    if (e.key === 'Shift') keys.shift = false;
    if (e.key === 'e') keys.e = false;
    if (e.key === 'q') keys.q = false;
});

// Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move floor to create repeating effect
    if (keys.right) {
        floor.x -= 5;  // Move floor to the left when moving right
    }
    if (keys.left) {
        floor.x += 5;  // Move floor to the right when moving left
    }

    // If the floor moves out of view, reset it to create a seamless loop
    if (floor.x <= -floor.width) {
        floor.x = 0;
    } else if (floor.x >= 0) {
        floor.x = -floor.width;
    }

    // Draw the repeating floor
    ctx.drawImage(floor.image, floor.x, floor.y, floor.width, floor.height);
    ctx.drawImage(floor.image, floor.x + floor.width, floor.y, floor.width, floor.height);

    // Update the player's action based on key presses
    if (keys.left || keys.right) {
        player.currentAction = 'walk'; // Player is walking
    } else if (keys.up && !player.isJumping) {
        player.currentAction = 'jump'; // Player is jumping
    } else if (keys.space) {
        player.currentAction = 'attack'; // Player is attacking
    } else {
        player.currentAction = 'idle'; // Player is idle
    }

    // Player Movement with boundary checks
    if (keys.left && player.x > 0) {
        player.x -= player.speed;
        player.facingRight = false;  // If moving left, flip sprite
    }
    if (keys.right && player.x + player.width < canvas.width) {
        player.x += player.speed;
        player.facingRight = true;  // If moving right, face sprite right
    }

    // Gravity & Jumping
    if (player.y + player.height < floor.y) {
        // Apply gravity if not on the floor
        player.velocityY += 1; // Increase downward velocity
        player.isJumping = true;
    } else {
        // Player is standing on the floor
        player.velocityY = 0;
        player.y = floor.y - player.height; // Set player on top of the floor
        player.isJumping = false;
    }

    // Jumping condition (only if not already jumping)
    if (keys.up && !player.isJumping) {
        player.velocityY = -15; // Jump with upward velocity
    }

    player.y += player.velocityY; // Update player's vertical position

    // Switch between GIFs based on the current action
    switch (player.currentAction) {
        case 'idle':
            player.sprite = idleSprite;
            break;
        case 'walk':
            player.sprite = walkSprite;
            break;
        case 'jump':
            player.sprite = jumpSprite;
            break;
        case 'attack':
            player.sprite = attackSprite;
            break;
    }

    // Flip the sprite when moving left
    if (!player.facingRight) {
        ctx.save(); // Save the current context state
        ctx.scale(-1, 1); // Flip the sprite horizontally
        ctx.drawImage(player.sprite, -player.x - player.width, player.y, player.width, player.height); // Draw flipped sprite
        ctx.restore(); // Restore the context to original state
    } else {
        // Draw sprite normally when facing right
        ctx.drawImage(player.sprite, player.x, player.y, player.width, player.height);
    }

    // Update Health Bar
    document.getElementById('health').style.width = `${health}%`;

    // Update Power-Up Bar
    document.getElementById('power-up').style.width = `${powerUp}%`;

    requestAnimationFrame(gameLoop);
}

gameLoop();


