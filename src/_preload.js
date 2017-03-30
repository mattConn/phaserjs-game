var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// assets list
var assets = {
    images : [
        ['sky', '../assets/sky.png'],
        ['ground', '../assets/platform.png'],
        ['star', '../assets/star.png'],
        ['worldEdge', '../assets/worldEdge.png'],
        ['lt-background', '../assets/living-tissue-set/layers/background.png'],
        ['lt-platform', '../assets/living-tissue-set/layers/ltplatform.png'],
        ['lt-ceiling', '../assets/living-tissue-set/layers/ltceiling.png'],
        ['grid-cell', '../assets/grid-cell.png']
    ],
    spritesheets : [
        ['lt-tiles', '../assets/living-tissue-set/layers/tileset.png', 144, 48],
        ['dude', '../assets/dude.png', 32, 48],
        ['enemy', '../assets/baddie.png', 32, 32]
    ]
}

function preload() {
    // load images
    for (var key in assets.images) {
        game.load.image(assets.images[key][0], assets.images[key][1]);
    }

    // load spritesheets
    for (var key in assets.spritesheets) {
        game.load.spritesheet(
            assets.spritesheets[key][0],
            assets.spritesheets[key][1],
            assets.spritesheets[key][2],
            assets.spritesheets[key][3]
        );
    }
}

// global group variable declarations
var player,
platforms,
cursors,
ltBackground,
ltPlatforms,
worldEdges,
grid,
enemies,
enemy;