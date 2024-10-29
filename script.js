// complete the given function

function palindrome(str){

	let n = str.toLowerCase()
	let N = n.split(' ').reverse().join(' ')
	return n == N

}
module.exports = palindrome
