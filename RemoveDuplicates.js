let array = [1,2,3,4,5,6,7,8,9,9,1,2,3,];
function removeDuplicates(array){
	let map = {},
		dedupArray = [];
	for(let i = 0; i < array.length; i++){
		if(map.hasOwnProperty(array[i]) && map[array[i]] !== 0){}	
		else{
			map[array[i]] = 1;
			dedupArray.push(array[i]);
		}
	}
	return dedupArray;
}
console.log(removeDuplicates(array));