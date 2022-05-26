// Greedy quantifiers can be turned into lazy quantifiers to separate text.
// .	Wildcard matches with anything even if it is empty, except \n.
// g    Match anything globally.

const regex = /<whiskey>.*?<\/whiskey>/g;
const text = "<whiskey>Jack Daniels</whiskey><whiskey>Jameson</whiskey>";

// This will return an array with two elements. If the `?` is taken off, the
// evaluation will continue and it'll return a single one.
console.log(text.match(regex));
