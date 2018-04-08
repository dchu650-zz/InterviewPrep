let binaryNum = 0110010110011101010100;
function numberOfOnes(binaryNum){
	let count = 0;
	console.log(binaryNum);
	while(binaryNum > 10){
		if(binaryNum % 10 === 1)
			count += 1;
		binaryNum = Math.floor(binaryNum / 10);
	}
	if(binaryNum % 10 === 1)
		count += 1;
	return count;
}
console.log(numberOfOnes(binaryNum));