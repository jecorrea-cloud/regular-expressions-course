// Greedy quantifiers can be used to separate text.
// .	Match with anything even if it is empty
// g    Match anything globally.

const regex = /<whiskey>.*?<\/whiskey>/g;
const text = "<whiskey>Jack Daniels</whiskey><whiskey>Jameson</whiskey>";

// This will return an array with two elements. If the `?` is taken off, it'll return a single one
console.log(text.match(regex));
