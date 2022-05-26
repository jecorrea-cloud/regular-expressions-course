// Quantifiers are used to find matches anywhere in a string chain
// *	Match zero or more times. i.e. /^a*$/
// +	Match one or more times.
// ?	Match zero or one time.
// { n }	Match exactly n times.
// { n ,}	Match at least n times (infinity).
// { n , m }	Match from n to m times.

// This expression's beginning must match with `duck`, match `1` at least to 2 times and finish with an `A`
const regex = /^duck1{2,}A$/;
const text = "duck111A";

if (regex.test(text)) {
  console.log("It's correct");
} else {
  console.log("It's wrong");
}
