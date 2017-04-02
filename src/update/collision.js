// collision detection

var collidesWith = {
    player : [platforms, enemies],
    enemies : [platforms, player],
    worldEdges : [
	{name: enemies, left: enemyLeftWallCollision, right: enemyRightWallCollision}, 
	{name: player, left: playerLeftWallCollision, right: playerRightWallCollision}
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
function playerRightWallCollision(){
	player.position.x = 3;
	drawLevel(level1[1]);
}

function playerLeftWallCollision(){
	player.position.x = game.world.width - 3;
}

function enemyLeftWallCollision(enemies, enemy){
    enemy.animations.play('right');
}
function enemyRightWallCollision(enemies, enemy){
    enemy.animations.play('left');
}
