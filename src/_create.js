function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //=include create/object-groups.js
    //=include create/player.js
    //=include create/enemy-groups.js

    // level
    //=include _room-1.js
    
    //=include _persistent.js

    // keyboard input support
    //=include keyboard/definitions.js
}