// Grouping constructs delineate the subexpressions of a regular expression and capture the substrings of an input string.
// ( subexpression )      Parenthesis capture the matched subexpression and assigns it a one-based ordinal number..
// |	Matches any one element separated by the vertical bar (|) character.
// [ character_group ]	Matches any single character in character_group. By default, the match is case-sensitive.
// [^ character_group ]	Negation: Matches any single character that is not in character_group. By default, characters in character_group are case-sensitive.	[^aei]	"r", "g", "n" in "reign"
// [ first - last ]	Character range: Matches any single character in the range from first to last.

// const regex = /^(\w|\s)(whiskey|beer)$/;
// const text = "Jack likes whiskey";

const regex = /^A[1-9]A$/;
const text = "A6667A";

if (regex.test(text)) {
  console.log("It's correct");
} else {
  console.log("It's wrong");
}
