// Unicode characters can be used in regex as well!!! 🤯
const regex = /[\w\s]+🤘{3}$/u;
const text = "This course rocks 🤘🤘🤘";

if (regex.test(text)) {
  console.log("It's correct");
} else {
  console.log("It's wrong");
}
