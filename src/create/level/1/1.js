// living tissue bg tile
for(var j=0; j<7; j++){
    for (var i = 0; i < 8; i++) {
        ltBackground.create(i*144, j*144, 'lt-background');
    }
}

// square.create(cell(1), cell(10), 'square');

(function(){ 
return level1 = [

	[
    //1                       25
    '-------------------------',//1
    '-------------------------',//2
    '-------------------------',//3
    '-------------------------',//4
    '-------------------------',//5
    '-------------------------',//6
    '-------------------------',//7
    '-------------------------',//8
    '----pppppp----------ppppp',//9
    '-------------------------',//1-
    '-------------------------',//11
    '-------------------------',//12
    '-------------------------',//13
    '-------------------------',//14
    '-------------------------',//15
    '-------------------------',//16
    '-------------------------',//17
    'ppppppppppppppppppppppppp',//18
    'ppppppppppppppppppppppppp' //19
	],


	[
    //1                       25
    '-------------------------',//1
    '-------------------------',//2
    '-------------------------',//3
    '-------------------------',//4
    '-------------------------',//5
    '-------------------------',//6
    '-------------------------',//7
    '-------------------------',//8
    '-------------------------',//9
    '-------------------------',//1-
    '-------------------------',//11
    '----ppppppppppppppppppppp',//12
    '-------------------------',//13
    '-------------------------',//14
    '-------------------------',//15
    '-------------------------',//16
    '-------------------------',//17
    'ppppppppppppppppppppppppp',//18
    'ppppppppppppppppppppppppp' //19
	]

];
})();

drawLevel(level1[0], 'firstTime');

// Ground creation
/*
for(var i=0;i<5;i++){
    var ground = platforms.create(i*185, game.world.height - 67, 'lt-platform');
    ground.body.immovable = true;
}
*/
/*
// top left quadrant ledge creation
for(var i=0;i<2;i++){
    var platform = platforms.create(185*i, 290, 'lt-platform');
        platform.body.immovable = true;
}

// bottom right quadrant ledge creation
for(var i=0;i<6;i++){
    var platform = platforms.create(185*i+500, 400, 'lt-platform');
        platform.body.immovable = true;
}
*/

//spawnEnemies(200,200,'right');
// spawnEnemies(300,200,'right');

/*
// spawning enemies
enemies.velocity = 150;

for(var i=0;i<5;i++){ spawnEnemies(
    i * 32, 0, 'right'); }

for(var i=0;i<5;i++){ spawnEnemies(
    i * 32 + 600, 100, 'left');}
*/
