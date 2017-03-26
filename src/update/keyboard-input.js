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

// DEV
dev = 0;
if (devButton.isDown){
    dev=1;
}
if ( (dev > 0) && (cursors.left.isDown || cursors.right.isDown || jumpButton.isDown) ) {
    console.log(player.position);
}