const spinCharacters = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

spinCharacters.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${char} `);
  }, 200 * index);
});

setTimeout(() => {
  process.stdout.write("\n");
}, 200 * spinCharacters.length);
