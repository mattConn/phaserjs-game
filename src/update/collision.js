// collision detection

var collidesWith = {
    player : [platforms, enemies],
    enemies : [platforms],
    worldEdges : [
	{name: enemies, left: enemyLeftWallCollision, right: enemyRightWallCollision}, 
	{name: player, left: playerWallCollision, right: playerWallCollision}
    ]

};

// player collision
for (var key in collidesWith.player) { game.physics.arcade.collide(player, collidesWith.player[key]); }

// enemy collision
for (var key in collidesWith.enemies) { game.physics.arcade.collide(enemies, collidesWith.enemies[key]); }

// left world bounds collision
for (var key in collidesWith.worldEdges) { 
    game.physics.arcade.collide(
        collidesWith.worldEdges[key].name, 
        worldEdges.getAll('worldEdge')[0], 
        collidesWith.worldEdges[key].left, 
	null, this);
}

// right world bounds collision
for (var key in collidesWith.worldEdges) { 
    game.physics.arcade.collide(
        collidesWith.worldEdges[key].name, 
        worldEdges.getAll('worldEdge')[1], 
        collidesWith.worldEdges[key].right, 
	null, this);
}

game.physics.arcade.overlap(player, null, this);

// player and enemy wall collision

function playerWallCollision(){
console.log('player wall collision');
}

function enemyLeftWallCollision(enemies, enemy){
    enemy.animations.play('right');
}
function enemyRightWallCollision(enemies, enemy){
    enemy.animations.play('left');
}
