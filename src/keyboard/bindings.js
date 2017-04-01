player.body.velocity.x = 0;
var playerSpeed = 250;

// arrow keys; left/right movement
if (cursors.left.isDown) {
    player.body.velocity.x = -1 * (player.walkingSpeed + isRunning());
    player.animations.play('left');
}
else if (cursors.right.isDown) {
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
if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
    player.body.velocity.y = -780;
}

//running
function isRunning(){
   if (runButton.isDown) {
     return player.runningSpeed; 
   } else {
     return 0;
   }
}

// DEV display grid
if (gridButton.isDown) {
   grid.alpha = 0.2;
}
