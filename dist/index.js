var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// assets list
var assets = {
    images : [
        ['sky', '../assets/sky.png'],
        ['ground', '../assets/platform.png'],
        ['star', '../assets/star.png'],
        ['worldEdge', '../assets/worldEdge.png'],
        ['lt-background', '../assets/living-tissue-set/layers/background.png'],
        ['lt-platform', '../assets/living-tissue-set/layers/ltplatform.png'],
        ['lt-ceiling', '../assets/living-tissue-set/layers/ltceiling.png'],
        ['grid-cell', '../assets/grid-cell.png']
    ],
    spritesheets : [
        ['lt-tiles', '../assets/living-tissue-set/layers/tileset.png', 144, 48],
        ['dude', '../assets/dude.png', 32, 48],
        ['enemy', '../assets/baddie.png', 32, 32]
    ]
}

function preload() {
    // load images
    for (var key in assets.images) {
        game.load.image(assets.images[key][0], assets.images[key][1]);
    }

    // load spritesheets
    for (var key in assets.spritesheets) {
        game.load.spritesheet(
            assets.spritesheets[key][0],
            assets.spritesheets[key][1],
            assets.spritesheets[key][2],
            assets.spritesheets[key][3]
        );
    }
}

// global group variable declarations
var player,
platforms,
cursors,
ltBackground,
ltPlatforms,
worldEdges,
grid,
enemies,
enemy;
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    worldEdges = game.add.group();

    worldEdges.enableBody = true;

    ltBackground = game.add.group();

    platforms = game.add.group();

    platforms.enableBody = true;

    grid = game.add.group();
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
    // living tissue bg tile
    for(var j=0; j<7; j++){
        for (var i = 0; i < 8; i++) {
            ltBackground.create(i*144, j*144, 'lt-background');
        }
    }
    
    // Ground creation
    for(var i=0;i<5;i++){
        var ground = platforms.create(i*185, game.world.height - 67, 'lt-platform');
        ground.body.immovable = true;
    }
    
    // top left quadrant ledge creation
    for(var i=0;i<2;i++){
        var platform = platforms.create(185*i, 290, 'lt-platform');
            platform.body.immovable = true;
    }
    
    // bottom right quadrant ledge creation
    for(var i=0;i<6;i++){
        var platform = platforms.create(185*i+500, 400, 'lt-platform');
            platform.body.immovable = true;
    }
    
    // spawning enemies
    enemies.velocity = 150;
    
    for(var i=0;i<5;i++){ spawnEnemies(
        i * 32, 0, 'right', enemies.velocity); }
    
    for(var i=0;i<5;i++){ spawnEnemies(
        i * 32 + 600, 100, 'left', -1 * enemies.velocity);}
    
    // ever-present game elements
    
    
    
    var worldEdge = worldEdges.create(5,0,'worldEdge');
    
    worldEdge.body.immovable = true;
    
    worldEdge.alpha = 0;
    
    
    
    worldEdge = worldEdges.create(game.world.width - 3,0,'worldEdge');
    
    worldEdge.body.immovable = true;
    
    worldEdge.alpha = 0;
    
    
    
    // DEV grid
    
    for(var j=0; j<game.world.width/32; j++){
    
        for (var i = 0; i <= game.world.height/32; i++) {
    
            grid.create(j * 32, i * 32, 'grid-cell');
    
            grid.alpha = 0.2;
    
        }
    
    }

    // keyboard input support
    // bindings included in update/index.js
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    devButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
}
function update() {
    // collision detection
    
    var collidesWith = {
        player : [platforms, enemies],
        enemies : [platforms],
        worldEdges : [enemies, player]
    
    };
    
    for (var key in collidesWith.player) { game.physics.arcade.collide(player, collidesWith.player[key]); }
    
    for (var key in collidesWith.enemies) { game.physics.arcade.collide(enemies, collidesWith.enemies[key]); }
    
    // left world bounds collision
    for (var key in collidesWith.worldEdges) { 
        game.physics.arcade.collide(
            collidesWith.worldEdges[key], 
            worldEdges.getAll('worldEdge')[0], 
            enemyLeftWallCollision, 
            null, this);
    }
    
    // right world bounds collision
    for (var key in collidesWith.worldEdges) { 
        game.physics.arcade.collide(
            collidesWith.worldEdges[key], 
            worldEdges.getAll('worldEdge')[1], 
            enemyRightWallCollision, 
            null, this);
    }
    
    game.physics.arcade.overlap(player, null, this);
    
    // player and enemy wall collision
    
    function playerWallCollision(){''}
    
    function enemyLeftWallCollision(enemies, enemy){
        enemy.animations.play('right');
    }
    function enemyRightWallCollision(enemies, enemy){
        enemy.animations.play('left');
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
        enemy.body.bounce.setTo(1, 0);
        enemy.body.collideWorldBounds = true;
        enemy.animations.add('left', [0, 1], 10, true);
        enemy.animations.add('right', [2, 3], 10, true);

        enemy.animations.play(animation);
        enemy.body.velocity.x = velocity;
}