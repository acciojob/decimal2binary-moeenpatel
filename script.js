function decimalToBinary(num) {
  //Write you code here
	let arr=[];
	let r;
	let i=0;
	while(num!=0){
		r=num%2;
		arr[i]+=r;
		num=num/2;
		i++;
	}
	arr.reverse();
	return arr;
}

window.decimalToBinary = decimalToBinary;
