// complete the given function

function palindrome(str) {
    // Convert to lowercase, remove non-alphanumeric characters, and join without spaces
    let n = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the processed string
    let N = n.split('').reverse().join('');
    // Check if the original processed string matches the reversed one
    return n === N;
}

module.exports = palindrome;
