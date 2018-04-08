let string = "Back when I was young enough. To know from where I came.";
function reverseString(string){
	let array = string.split(" ");
	console.log(array);
	let newString = "";
	for(let i = array.length-1; i >= 0; i--)
		newString += array[i] + " ";
	return newString;
}
console.log(reverseString(string));