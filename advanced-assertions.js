// Assertions are limits used to evaluate what begins, is contained or ends in a string
// (?=check)	Positive Lookahead:	Asserts that what immediately follows the current position in the string is "check"
// (?<=check)	Positive Lookbehind:	Asserts that what immediately precedes the current position in the string is "check"
// (?!check)	Negative Lookahead:	Asserts that what immediately follows the current position in the string is not "check"
// (?<!check)	Negative Lookbehind:	Asserts that what immediately precedes the current position in the string is not "check"

// const regex = /Vino(=?\s\w+)$/;
// const text = "Vino blanc0h";

// if (regex.test(text)) {
//   console.log("It's correct");
// } else {
//   console.log("It's wrong");
// }

// const regex = /(Vino|Cerveza)(=?\s\w+)$/;
// const text = "Vino tinto Vino blanco Vino feo Cerveza Heineken";

// console.log(text.match(regex));

const regex = /Java\s(?!8|9)$/;
const text = "Java 7";

if (regex.test(text)) {
  console.log("It's correct");
} else {
  console.log("It's wrong");
}
