player.body.velocity.x = 0;

// arrow keys; left/right movement
if (cursors.left.isDown) {
    player.body.velocity.x = -250;
    player.animations.play('left');
}
else if (cursors.right.isDown) {
    player.body.velocity.x = 250;
    player.animations.play('right');
}
else {
    // on stop, face direction of movement
    if (player.animations.currentAnim.name == 'left') {
        player.frame = 0;
    }
    else {
        player.frame = 5;
    }
    player.animations.stop();
}

// jumping
if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
    player.body.velocity.y = -780;
}