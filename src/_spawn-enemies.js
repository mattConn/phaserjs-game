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