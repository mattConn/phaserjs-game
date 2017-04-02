//level drawing functions

// number of room in level; updates when entering room (player world edge collision).
// room is drawn by matching roomnumber with level's room array index.
var roomNumber = 0;

// for drawing with 32x32 tiles
function cell(number){
	return (number - 1)*32;
}

function drawRoom(level){

	//clear room if full
	try {
		for(var key in levelElements){
			levelElements[key].callAll('kill');
		}
	} catch(e){};

	//draw level
	for(var key in level){
		for(var i=0; i <=  level[key].length; i++){
			
			switch (level[key].charAt(i)){
				case 'p':
					platform = platforms.create(cell(i), cell(key), 'lt-platform');
					platform.body.immovable=true;
					break;
				case 'e':
					enemies.create(cell(i), cell(key), 'enemy');
					break;
			}
		}
	}

	//all elements possibly present in level
	(function(){
		levelElements = [
			platforms,
			enemies
		];
	})();	

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
