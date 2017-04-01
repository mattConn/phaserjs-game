// ever-present game elements

var worldEdge = worldEdges.create(5,0,'worldEdge');
worldEdge.body.immovable = true;
worldEdge.alpha = 0;

worldEdge = worldEdges.create(game.world.width - 3,0,'worldEdge');
worldEdge.body.immovable = true;
worldEdge.alpha = 0;

// DEV grid, activated via G key
for(var j=0; j<game.world.width/32; j++){
    for (var i = 0; i <= game.world.height/32; i++) {
        grid.create(j * 32, i * 32, 'grid-cell');
        grid.alpha = 0;
    }
}
