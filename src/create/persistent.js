// ever-present game elements

var collider = colliders.create(5,0,'collider');
collider.body.immovable = true;
collider = colliders.create(game.world.width - 3,0,'collider');
collider.body.immovable = true;

// DEV grid
for(var j=0; j<game.world.width/32; j++){
    for (var i = 0; i <= game.world.height/32; i++) {
        grid.create(j * 32, i * 32, 'grid-cell');
        grid.alpha = 0.2;
    }
}