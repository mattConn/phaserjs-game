function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //=include create/_object-groups.js
    //=include create/_player.js
    //=include create/_enemy-groups.js

    //=include _room-1.js
    
    // keyboard input support
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.Z);
}