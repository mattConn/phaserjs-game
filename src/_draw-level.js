//level drawing functions

function cell(number){
	return (number - 1)*32;
}

function drawLevel(number,firstTime){
	
	//clear level before redraw
	if(!firstTime){
		//clear level	
		for(var key in levelElements){
			levelElements[key].callAll('kill');
		}
	}

	//draw level
	for(var key in number){
		for(var i=0; i <=  number[key].length; i++){
			
			switch (number[key].charAt(i)){
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
	//1						  25
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
