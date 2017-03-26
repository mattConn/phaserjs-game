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
}