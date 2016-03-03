var inputWords = ["HELLO", "CHILD", "PEOPLE", "MAN", "STUDENT", "PERSON", "SYSTEM", "DEMO", "COMPUTER"];
var wordList = [];
var totalRow = 6;
var totalCol = 6;

/****************
*** Generate Random number
*****************/
var nums = [];
var gen_nums = [];

for(n=1;n<=totalRow * totalCol;n++) {
	nums.push(n);
}

function in_array(array, el) {
   for(var i = 0 ; i < array.length; i++) 
       if(array[i] == el) return true;
   return false;
}

function get_rand(array) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(gen_nums, rand)) {
       gen_nums.push(rand); 
       return rand;
    }
    return get_rand(array);
}

/*************End Random number Generate********************/
buildTable();
function buildTable() {
	var content = "<table>"
	for(i=1; i<=totalRow*totalCol; i++){
		if((i-1) % totalRow == 0) {
			content += '<tr>';
		}
		content += '<td id="' + i + '">' + '' + '</td>';
		if(i % totalRow == 0) {
			content += '</tr>';
		}
	}
	content += "</table>"

	$('.tic-tac-toe').html(content);
}


showWords();
function showWords() {
	var content = "";
	for(i=0;i<inputWords.length;i++) {
		_word = inputWords[i];
		content += "<div>" + _word + "</div>"
	}
	$("#words").html(content);
}

createWordList();
function createWordList(words) {
	var splitWords = [];
	for(i=0;i<inputWords.length;i++) {
		_word = inputWords[i];
		if(_word.length <= 2) {
			wordList.push(_word);
		} else if(_word.length <= 3) {
			splitWords = _word.match(/.{1,2}/g);
			insertWords(splitWords);
		} else {
			splitWords = _word.match(/.{1,3}/g);
			insertWords(splitWords);
		}
	}
	
	console.log(wordList);
	
	for(i=0;i<wordList.length;i++) {
		//console.log(getRandomInt());
		var rnd = get_rand(nums);
		console.log(rnd);
		$("#" +rnd).html(wordList[i]);
	}
}

function insertWords(words) {
	for(j=0;j<words.length;j++) {
		wordList.push(words[j]);
	}
}

function getRandomInt(min, max) {
   min = 1;
   max = totalRow * totalCol;
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
