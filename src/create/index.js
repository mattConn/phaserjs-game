function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //=include object-groups.js
    //=include player.js
    //=include enemy-groups.js

    // level
    //=include levels/index.js
    
    //=include persistent.js

    // keyboard and controller input support
    // bindings included in update/index.js
    //=include ../input/definitions.js
}
