// Greedy quantifiers are used to find whatever matches anywhere.
// .	Match with anything even if it is empty
// g    Match anything globally.

const regex = /<whiskey>.*?<\/whiskey>/;
const text = "<whiskey>Jack Daniels</whiskey><whiskey>Jameson</whiskey>";

// This will return an array with two elements. If the `?` is taken off, it'll return a single one
console.log(text.match(regex));
