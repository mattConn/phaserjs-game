// build player
player = game.add.sprite(3, game.world.height - 150, 'dude');
game.physics.arcade.enable(player);
player.body.bounce.y = 0.1;
player.body.gravity.y = 2000;
player.walkingSpeed = 250;
player.runningSpeed = 280;
player.body.collideWorldBounds = true;
player.animations.add('left', [0, 1, 2, 3], 10, true);
player.animations.add('right', [5, 6, 7, 8], 10, true);
