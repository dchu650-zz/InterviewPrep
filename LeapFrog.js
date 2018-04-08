let wellHeight = 30;
function leapFrog(wellHeight){
	let frog = 0,
		numDays = 0;
	while(frog < 30){
		frog += 3;
		numDays += 1;
		if(frog >= 30)
			return numDays;
		frog -= 2;
	}
	return numDays;
}
console.log(leapFrog(wellHeight));