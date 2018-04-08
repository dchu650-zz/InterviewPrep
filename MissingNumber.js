let array = [1,2,3,4,5,6,7,8,10]
function missingElement(array){
	if(array.length == 0){
		return;
	}
	let sum = 0;
	let arraySum = 0;
	let missingNumber = 0;
	for(let i = 0; i <= array.length+1; i++){
		sum += i
		if(i < array.length)
			arraySum += array[i];
	}
	missingNumber = sum - arraySum;
	return missingNumber;
}

console.log(missingElement(array));