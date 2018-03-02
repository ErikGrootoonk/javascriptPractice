
function reverseString(str) {

 //return str.split('').reverse().join('');

/////////////////////////////////////////////

let reverseString = '';
for(let char of str){

    reverseString = char + reverseString;
}

return reverseString;


}

//call Function

const output = reverseString('KoekeBakker');

console.log(output);