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