## str-kit

🛠️ Some strings functions that can be usefull

```js
const {
  /* All functions you need */
} = require("str-kit");
```

🤔 Need to capitalize you string?

```js
const { capizalize } = require("str-kit");

console.log(capitalize("strings are cool!")); // "Strings are cool!"
```

🤔 Need to capitalize each word of a string?

```js
const { capAll } = require("str-kit");

console.log(capAll("strings are cool!")); // "Strings Are Cool!"
```

🤔 Need to reverse a string easily?

```js
const { reverse } = require("str-kit");

console.log(reverse("strings are cool!")); // "!looc era sgnirts"
```

🤔 Need to know how many "words" a string have?

```js
const { words } = require("str-kit");

console.log(words("strings are cool!")); // 3
```

🤔 Need to clean (remove useless space at the start & the end) a string?

```js
const { clean } = require("str-kit");

console.log(clean("   strings are cool!    ")); // "strings are cool!"
```

🤔 Need to randomize your string?

```js
const { randomize } = require("str-kit");

console.log(randomize("strings are cool!")); // For example, "r oioressacgnlt !"
```

🤔 Need to randomize the caps in a string?

```js
const { randomCaps } = require("str-kit");

console.log(randomCaps("strings are cool!")); // For example, "STriNGS aRe cOol!"
```

🤔 Need to truncate your string?

```js
const { trunc } = require("str-kit");

console.log(trunc("strings are cool!", 6)); // "string..."
```

🤔 Need to "numerize" a string?

```js
const { numerize } = require("str-kit");

console.log(numerize("strings are cool!")); // "str1ngs 4r3 c00l!"
```

🤔 Need to know how many times 'char' appears on a string?

```js
const { occurence } = require("str-kit");

console.log(occurence("strings are cool!", "o")); // 2
console.log(occurence("strings are cool!", "str")); // 1
console.log(occurence("strings are cool!", "f")); // 0
```

🤔 That's all for the moment, feel free to do a PR on the GitHub!

📎:

- [Github](https://github.com/AYnonyme971/str-kit)
