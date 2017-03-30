function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //=include object-groups.js
    //=include player.js
    //=include enemy-groups.js

    // level
    //=include level/1/1.js
    
    //=include persistent.js

    // keyboard input support
    // bindings included in update/index.js
    //=include ../keyboard/definitions.js
}