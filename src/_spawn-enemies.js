// enemy spawning fn

function spawnEnemies (x, y, direction) {
    enemy = enemies.create(x,y,'enemy');
        game.physics.arcade.enable(enemy);
        enemy.body.gravity.y = 2000;
        enemy.body.bounce.setTo(1, 0);
        enemy.body.collideWorldBounds = true;
        enemy.animations.add('left', [0, 1], 10, true);
        enemy.animations.add('right', [2, 3], 10, true);
	enemy.walkingSpeed = 150;	

        enemy.animations.play(direction);
        direction == 'left' ? enemy.body.velocity.x = -1 * enemy.walkingSpeed : enemy.body.velocity.x = 150;
}
