// Assertions are limits used to evaluate what begins, is contained or ends in a string
// /^a/ evaluates if a string begins with the character 'a'
// /a$/ evaluates if a string ends with the character 'a'
// /^a$/ evaluates if a string begins or ends with the character 'a'
// /Git\b/ with the `\b` the expression evaluates if a string ends with `Git` anywhere

const regex = /^a/;
const text = "alphanumerical";

if (regex.test(text)) {
  console.log("It's correct");
} else {
  console.log("It's wrong");
}
