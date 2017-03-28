var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    // things
    game.load.image('sky', '../assets/sky.png');
    game.load.image('ground', '../assets/platform.png');
    game.load.image('star', '../assets/star.png');
    game.load.image('collider', '../assets/collider.png');
    game.load.image('lt-background', '../assets/living-tissue-set/layers/background.png');//144x144
    game.load.spritesheet('lt-tiles', '../assets/living-tissue-set/layers/tileset.png', 144, 48);
    game.load.image('lt-platform', '../assets/living-tissue-set/layers/ltplatform.png');//185x67
    game.load.image('lt-ceiling', '../assets/living-tissue-set/layers/ltceiling.png');//78x75\
    game.load.image('grid-cell', '../assets/grid-cell.png');
    // characters
    game.load.spritesheet('dude', '../assets/dude.png', 32, 48);
    game.load.spritesheet('enemy', '../assets/baddie.png', 32, 32);
}

// global group variable declarations

// you
var player,
// standing surface
    platforms,
// keyboard support
    cursors,
// unused? FIXME
    edgeCollision,
// living tissue bg
    ltBackground,
// living tissue standing surface
    ltPlatforms,
// world edge collision
    colliders,
// grid for organization of sprites
    grid,
// enemies
    enemies,
// single enemy
    enemy;