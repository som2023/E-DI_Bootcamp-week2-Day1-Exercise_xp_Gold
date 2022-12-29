/*----------EXERCIse_1----------------*/

let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(" ")); 

/*---------EXERCISE_2--------- */
let str1 = "mix";
let str2 = "pod";
console.log(str1.substring(0,2).replace("mi","po"));
console.log(str1.substring(0,2).replace("po","mi"));
let str3 = str1 + " " + str2
console.log(typeof(str3));
console.log(str3);

/*--------------EXERCISE_3---------------- */

let num1 = prompt('Enter un First number?');
console.log(typeof(num1))
let num2 = prompt('Enter un Second number?');
console.log(typeof(num2))
let sum = Number(num1) + Number(num2)
let sub = Number(num1) - Number(num2)
let mul = Number(num1) * Number(num2)
let div = Number(num1) / Number(num2)
alert("la somme de " + " "+ num1 + " + " + num2 + " = " +sum);
alert("la soustraction de " + " "+ num1 + " - " + num2 + " = " +sub);
alert("la multiplication de " + " "+ num1 + " * " + num2 + " = " +mul);
alert("la division de " + " "+ num1 + " / " + num2 + " = " +div);