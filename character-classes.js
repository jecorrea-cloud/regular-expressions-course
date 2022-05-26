// \D       Represents all non decimal digit characters
// \d       Represents all decimal digit characters
// [A-Z]	Match any uppercase character from A to Z.
// [a-z]	Match any lowercase character from A to Z.
// [0-9]	Match any decimal digit character from 0 to 9.
// [_]	    Match any underscore character.
// [A-Za-z0-9_]     Match any alphabetical, numeric or underscore character
// \w       The same as the above
// \s       Match any space characters

// regex must begin with any character at least once, have one space at least once and end with at least one digit
const regex = /^\w+\s+\d+$/;
const text = "Oh y3ah      babe";

if (regex.test(text)) {
  console.log("It's correct");
} else {
  console.log("It's wrong");
}
