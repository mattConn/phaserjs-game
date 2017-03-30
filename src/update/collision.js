// collision detection

var collidesWith = {
    player : [platforms, enemies],
    enemies : [platforms],
    colliders : [enemies, player]

};

for (var key in collidesWith.player) { game.physics.arcade.collide(player, collidesWith.player[key]); }

for (var key in collidesWith.enemies) { game.physics.arcade.collide(enemies, collidesWith.enemies[key]); }

// left world bounds collision
for (var key in collidesWith.colliders) { 
    game.physics.arcade.collide(
        collidesWith.colliders[key], 
        colliders.getAll('collider')[0], 
        enemyLeftWallCollision, 
        null, this);
}

// right world bounds collision
for (var key in collidesWith.colliders) { 
    game.physics.arcade.collide(
        collidesWith.colliders[key], 
        colliders.getAll('collider')[1], 
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