// complete the given function
let str = prompt("Enter Input")
function palindrome(str){
	let newStr = str.split('').reverse().join('');
	if(newStr == str){
		return true;
	}else{
		return false;
	}
}
str = str.toLowerCase();
let result = palindrome(str);
if(result == true){
alert('true');
}else{
	alert('false');
}
module.exports = palindrome
