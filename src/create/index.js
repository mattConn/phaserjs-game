function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //=include object-groups.js
    //=include player.js
    //=include enemy-groups.js

    // level
    //=include ../level/1/1.js
    
    //=include persistent.js

    // keyboard input support
    //=include ../keyboard/definitions.js
}