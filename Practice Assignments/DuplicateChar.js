let string = "hello world"
function duplicateChar(string){
	let charMap = {};
	for(let i = 0; i < string.length; i++){
		let char = string.substring(i,i+1);
		if(charMap[char]>1)
			return char;
		else if(charMap[char] == null)
			charMap[char] = 1;
		else
			charMap[char] = charMap[char] + 1;
	}
	console.log("There are no duplicates");
	return;
}
console.log(duplicateChar(string));