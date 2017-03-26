function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //=include create/object-groups.js
    //=include create/player.js
    //=include create/enemy-groups.js

    //=include _room-1.js
    
    // keyboard input support
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    devButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
}