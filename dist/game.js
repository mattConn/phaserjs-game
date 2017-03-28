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
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    colliders = game.add.group();

    colliders.enableBody = true;

    ltBackground = game.add.group();

    grid = game.add.group();

    platforms = game.add.group();

    platforms.enableBody = true;
    // build player
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 2000;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    // enemy spawning setup
    enemies = game.add.group();
    enemies.enableBody = true;
    enemies.physicsBodyType = Phaser.Physics.ARCADE;

    // level
    //=include _room-1.js
    
    //=include _persistent.js

    // keyboard input support
    //=include keyboard/definitions.js
}
function update() {
    // collision detection
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, enemies);
    
    game.physics.arcade.collide(enemies, platforms);
    game.physics.arcade.overlap(player, colliders.getAll('collider')[0], playerWallCollision, null, this);
    
    // for(var i=0; i<enemies.length; i++){
    game.physics.arcade.overlap(enemies, colliders.getAll('collider')[0], enemyLeftWallCollision, null, this);
    game.physics.arcade.overlap(enemies, colliders.getAll('collider')[1], enemyRightWallCollision, null, this);
    // game.physics.arcade.overlap(enemy, colliders.getAll('collider')[1], enemyRightWallCollision, null, this);
    // game.physics.arcade.overlap(enemy, colliders.getAll('collider')[0], enemyLeftWallCollision, null, this);
    // }
    
    game.physics.arcade.overlap(player, null, this);
    
    // player and enemy wall collision
    // function playerWallCollision(){console.log('WALL COLLISION')}
    function playerWallCollision(){''}
    
    function enemyLeftWallCollision(){
        enemy.animations.play('right');
        enemy.body.velocity.x = 150;
    }
    
    function enemyRightWallCollision(){
        enemy.animations.play('left');
        enemy.body.velocity.x = -150;
    }
    player.body.velocity.x = 0;
    
    // arrow keys; left/right movement
    if (cursors.left.isDown) {
        player.body.velocity.x = -250;
        player.animations.play('left');
    }
    else if (cursors.right.isDown) {
        player.body.velocity.x = 250;
        player.animations.play('right');
    }
    else {
        // on stop, face direction of movement
        if (player.animations.currentAnim.name == 'left') {
            player.frame = 0;
        }
        else {
            player.frame = 5;
        }
        player.animations.stop();
    }
    
    // jumping
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
        player.body.velocity.y = -780;
    }
}

// enemy spawning fn

function spawnEnemies (x, y, animation, velocity) {
    enemy = enemies.create(x,y,'enemy');
        game.physics.arcade.enable(enemy);
        enemy.body.gravity.y = 2000;
        enemy.body.collideWorldBounds = true;
        enemy.animations.add('left', [0, 1], 10, true);
        enemy.animations.add('right', [2, 3], 10, true);

        enemy.animations.play(animation);
        enemy.body.velocity.x = velocity;
}