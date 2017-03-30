// collision detection
game.physics.arcade.collide(player, platforms);
game.physics.arcade.collide(player, enemies);

game.physics.arcade.collide(enemies, platforms);

game.physics.arcade.collide(enemies, colliders.getAll('collider')[0], enemyLeftWallCollision, null, this);
game.physics.arcade.collide(enemies, colliders.getAll('collider')[1], enemyRightWallCollision, null, this);
// game.physics.arcade.overlap(enemy, colliders.getAll('collider')[1], enemyRightWallCollision, null, this);
// game.physics.arcade.overlap(enemy, colliders.getAll('collider')[0], enemyLeftWallCollision, null, this);
// }

game.physics.arcade.overlap(player, null, this);

// player and enemy wall collision
// function playerWallCollision(){console.log('WALL COLLISION')}
function playerWallCollision(){''}

function enemyLeftWallCollision(enemies, enemy){
    enemy.animations.play('right');
}
function enemyRightWallCollision(enemies, enemy){
    enemy.animations.play('left');
}