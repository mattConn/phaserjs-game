function update() {

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

    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);


    player.body.velocity.x = 0;
    if (cursors.left.isDown) {

        player.body.velocity.x = -250;

        player.animations.play('left');

    }
    else if (cursors.right.isDown) {
        player.body.velocity.x = 250;

        player.animations.play('right');

    }
    else {
        if (player.animations.currentAnim.name == 'left') {
            player.frame = 0;
        }
        else {
            player.frame = 5;
        }
        player.animations.stop();
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
        player.body.velocity.y = -780;
    }
    
    // HERE
    for (var i = 0; i < enemies.length; i++ ){
        for (var j = 0; j < colliders.length; j++ ){
            if (enemies.getAll('enemy')[i].body.position.x == colliders.getAll('collider')[j].body.position.x - enemies.getAll('enemy')[i].body.width) {
                console.log('test');
            }
        }
    }
    
    if (player.body.position.x <= colliders.getAll('collider')[0].body.position.x - player.body.width){
        console.log('player test');
    }

    // // enemy movement
    // if (enemy.body.position.x == 0){
    
    //     enemy.body.velocity.x = 150;
    //     enemy.animations.play('right');
    
    // } else if(enemy.body.position.x >= game.world.width-enemy.body.width){
    //     enemy.body.velocity.x = -150;
    //     enemy.animations.play('left');
    // }

}// end update



function collectStar (player, star) {

    star.kill();
    
    score += 10;
    scoreText.text = 'Score: ' + score;
    
}

// player and enemy wall collision
function playerWallCollision(){console.log('WALL COLLISION')}

function enemyLeftWallCollision(){
    enemy.animations.play('right');
    enemy.body.velocity.x = 150;
}

function enemyRightWallCollision(){
    enemy.animations.play('left');
    enemy.body.velocity.x = -150;
}