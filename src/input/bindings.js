player.body.velocity.x = 0;

// arrow keys, 360 joystick; left/right movement
if (cursors.left.isDown || gamepad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
    player.body.velocity.x = -1 * (player.walkingSpeed + isRunning());
    player.animations.play('left');
}
else if (cursors.right.isDown || gamepad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1) {
    player.body.velocity.x = player.walkingSpeed + isRunning();
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
if ((jumpButton.justDown || gamepad.justPressed(Phaser.Gamepad.XBOX360_A)) && (player.body.onFloor() || player.body.touching.down)) {
    player.body.velocity.y = -780;
}

//running
function isRunning(){
   if (runButton.isDown || gamepad.isDown(Phaser.Gamepad.XBOX360_X) ) {
     return player.runningSpeed; 
   } else {
     return 0;
   }
}

// DEV display grid
if (gridButton.justDown) {
   grid.alpha = 0.2;
}
