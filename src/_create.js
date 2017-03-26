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
        // spawnEnemies(game.world.width - 100, game.world.height - 120, 20);
        // spawnEnemies(game.world.width - 100, game.world.height - 120);
        // spawnEnemies(game.world.width - 50, game.world.height - 120);
        // spawnEnemies(game.world.width - 50, 350);
    
    // add keyboard input support
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    
}