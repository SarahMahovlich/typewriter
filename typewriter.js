const sentence = "hello there from lighthouse labs";
let time = 0;
let index = 0;

for (const char of sentence) {
  setTimeout(() => {
    index += 1;
    process.stdout.write(char);
    if (index === sentence.length) {
      console.log("");
    }
  }, time);
  time += 50;
}