const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	const arr = Object.keys(sampleObject);
	for(let i=0; i<arr.length; i++){
		if(arr[i]==key){
			return true;
		}
	}
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
