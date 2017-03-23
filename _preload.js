var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', '../assets/sky.png');
    game.load.image('ground', '../assets/platform.png');
    game.load.image('star', '../assets/star.png');
    game.load.spritesheet('dude', '../assets/dude.png', 32, 48);
    
    game.load.spritesheet('enemy', '../assets/baddie.png', 32, 32);
    
    // living tissue assets
    game.load.image('lt-background', '../living-tissue-set/layers/background.png');//144x144
    game.load.spritesheet('lt-tiles', '../living-tissue-set/layers/tileset.png', 144, 48);
    game.load.image('lt-platform', '../living-tissue-set/layers/ltplatform.png');//185x67
    game.load.image('lt-ceiling', '../living-tissue-set/layers/ltceiling.png');//78x75

    game.load.image('collider', '../assets/collider.png');

}

var player,
    platforms,
    cursors,
    edgeCollision,
    ltBackground,
    ltPlatforms,
    colliders,
    enemies,
    enemy,
    stars;

var score = 0;
var scoreText;

