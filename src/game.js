var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', '../assets/sky.png');
    game.load.image('ground', '../assets/platform.png');
    game.load.image('star', '../assets/star.png');
    game.load.spritesheet('dude', '../assets/dude.png', 32, 48);
    
    game.load.spritesheet('enemy', '../assets/baddie.png', 32, 32);
    
    // living tissue assets
    game.load.image('lt-background', '../assets/living-tissue-set/layers/background.png');//144x144
    game.load.spritesheet('lt-tiles', '../assets/living-tissue-set/layers/tileset.png', 144, 48);
    game.load.image('lt-platform', '../assets/living-tissue-set/layers/ltplatform.png');//185x67
    game.load.image('lt-ceiling', '../assets/living-tissue-set/layers/ltceiling.png');//78x75

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

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    colliders = game.add.group();
        colliders.enableBody = true;
        
        var collider = colliders.create(5,0,'collider');
        collider.body.immovable = true;
        
        collider = colliders.create(game.world.width - 3,0,'collider');
        collider.body.immovable = true;
        

    // living tissue bg tile
    ltBackground = game.add.group();
    for(var j=0; j<7; j++){
        for (var i = 0; i < 8; i++) {
            ltBackground.create(i * 144, j * 144, 'lt-background');
        }
    }
    // standing surface
    platforms = game.add.group();
        platforms.enableBody = true;
    
    // Ground creation
    for(var i=0;i<5;i++){
        var ground = platforms.create(i*185, game.world.height - 67, 'lt-platform');
        ground.body.immovable = true;
    }
    
    // top left quadrant
    // ledge creation
    for(var i=0;i<2;i++){
        var platform = platforms.create(185*i, 290, 'lt-platform');
            platform.body.immovable = true;
    }

    // bottom right quadrant
    // ledge creation
    for(var i=0;i<6;i++){
        var platform = platforms.create(185*i+500, 400, 'lt-platform');
            platform.body.immovable = true;
    }

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
        
        // spawning enemies
        spawnEnemies(game.world.width - 100, game.world.height - 120, 20);
        // spawnEnemies(game.world.width - 100, game.world.height - 120);
        // spawnEnemies(game.world.width - 50, game.world.height - 120);
        // spawnEnemies(game.world.width - 50, 350);
    
    // add keyboard input support
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    
}// end create fn

// enemy spawning fn
// TODO
// Fix default velocity when arg is null
function spawnEnemies (x, y, rBounds) {
    enemy = enemies.create(x,y,'enemy');
        game.physics.arcade.enable(enemy);
        enemy.body.gravity.y = 2000;
        enemy.body.collideWorldBounds = true;
        enemy.animations.add('left', [0, 1], 10, true);
        enemy.animations.add('right', [2, 3], 10, true);
        
        // enemy movement
    if (enemy.body.position.x == x){
    
        enemy.body.velocity.x = -150;
        enemy.animations.play('left');
    
    }
    // else if(enemy.body.position.x == rBounds){
    //     enemy.body.velocity.x = 150;
    //     enemy.animations.play('right');
    // }

        
        // enemy.animations.play('left');
}function update() {

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

    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);


    player.body.velocity.x = 0;
    if (cursors.left.isDown) {

        player.body.velocity.x = -250;

        player.animations.play('left');

    }
    else if (cursors.right.isDown) {
        player.body.velocity.x = 250;

        player.animations.play('right');

    }
    else {
        if (player.animations.currentAnim.name == 'left') {
            player.frame = 0;
        }
        else {
            player.frame = 5;
        }
        player.animations.stop();
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
        player.body.velocity.y = -780;
    }
    
    // HERE
    for (var i = 0; i < enemies.length; i++ ){
        for (var j = 0; j < colliders.length; j++ ){
            if (enemies.getAll('enemy')[i].body.position.x == colliders.getAll('collider')[j].body.position.x - enemies.getAll('enemy')[i].body.width) {
                console.log('test');
            }
        }
    }
    
    if (player.body.position.x <= colliders.getAll('collider')[0].body.position.x - player.body.width){
        console.log('player test');
    }

    // // enemy movement
    // if (enemy.body.position.x == 0){
    
    //     enemy.body.velocity.x = 150;
    //     enemy.animations.play('right');
    
    // } else if(enemy.body.position.x >= game.world.width-enemy.body.width){
    //     enemy.body.velocity.x = -150;
    //     enemy.animations.play('left');
    // }

}// end update



function collectStar (player, star) {

    star.kill();
    
    score += 10;
    scoreText.text = 'Score: ' + score;
    
}

// player and enemy wall collision
function playerWallCollision(){console.log('WALL COLLISION')}

function enemyLeftWallCollision(){
    enemy.animations.play('right');
    enemy.body.velocity.x = 150;
}

function enemyRightWallCollision(){
    enemy.animations.play('left');
    enemy.body.velocity.x = -150;
}