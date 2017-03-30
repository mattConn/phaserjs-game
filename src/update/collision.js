// collision detection

var collidesWith = {
    player : [platforms, enemies],
    enemies : [platforms],
    worldEdges : [enemies, player]

};

// player collision
for (var key in collidesWith.player) { game.physics.arcade.collide(player, collidesWith.player[key]); }

// enemy collision
for (var key in collidesWith.enemies) { game.physics.arcade.collide(enemies, collidesWith.enemies[key]); }

// left world bounds collision
// TODO make recursive for all enemies and player; array of functions?
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