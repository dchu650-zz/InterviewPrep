//Function for quick sort algorithm

//Array that we are trying to sort
var arrayList = [3,5,7,8,9,1,2,4,6];

//sort function
function QuickSort(insertArray){
	//check for final condition before returning number
	if(insertArray.length < 1)
		return insertArray;
	//instantiate the 
		//pivot number
		//smaller than pivot array
		//larger than pivot array
		//final sorted array
	var pivot = insertArray.pop(),
		left = [],
		right = [],
		finalArray = [];
	//for loop that separates the array from smallest to largest
	for(var i = 0; i < insertArray.length; i++){
		if(insertArray[i] < pivot)
			left.push(insertArray[i]);
		else
			right.push(insertArray[i]);
	}
	//recursively splt and build array
	return finalArray.concat(QuickSort(left),pivot,QuickSort(right));
}

console.log(QuickSort(arrayList));