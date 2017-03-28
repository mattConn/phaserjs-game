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

spawnEnemies(
    game.world.width - 100,
    game.world.height - 120,
    'left',
    -1 * enemies.velocity
);

spawnEnemies(
    game.world.width - 100,
    game.world.height - 120,
    'right',
    enemies.velocity
);
// spawnEnemies(game.world.width - 150, game.world.height - 120, 20, 'right');
// spawnEnemies(game.world.width - 100, game.world.height - 120, 20);
// spawnEnemies(game.world.width - 100, game.world.height - 120);
// spawnEnemies(game.world.width - 50, game.world.height - 120);
// spawnEnemies(game.world.width - 50, 350);