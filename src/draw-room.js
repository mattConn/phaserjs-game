//level drawing functions

// number of room in level; updates when entering room (player world edge collision).
// room is drawn by matching roomnumber with level's room array index.
var roomNumber = 0;

// for drawing with 32x32 tiles
function cell(number){
	return (number - 1)*32;
}

function drawRoom(room){

	//clear room if full
	try {
		for(var element in roomElements){
			roomElements[element].callAll('kill');
		}
	} catch(e){};

	//draw level
	for(var row in room){
		for(var column=0; column <=  room[row].length; column++){
			
			switch (room[row].charAt(column)){
				case 'p':
					platform = platforms.create(cell(column), cell(row), 'lt-platform');
					platform.body.immovable=true;
					break;
				case 'e':
					//enemies.create(cell(column), cell(row), 'enemy');
					spawnEnemies(cell(column), cell(row), 'left');
					break;
				case 'E':
					//enemies.create(cell(column), cell(row), 'enemy');
					spawnEnemies(cell(column), cell(row), 'right');
					break;
			}
		}
	}

	//all elements possibly present in level; to be cleared on new room
	roomElements = [
		platforms,
		enemies
	];

}

/*
//level map blueprint
var foo = [
	//1			12			 25
	'-------------------------',//1
	'-------------------------',//2
	'-------------------------',//3
	'-------------------------',//4
	'-------------------------',//5
	'-------------------------',//6
	'-------------------------',//7
	'-------------------------',//8
	'-------------------------',//9
	'-------------------------',//10
	'-------------------------',//11
	'-------------------------',//12
	'-------------------------',//13
	'-------------------------',//14
	'-------------------------',//15
	'-------------------------',//16
	'-------------------------',//17
	'-------------------------',//18
	'-------------------------' //19
];
*/
