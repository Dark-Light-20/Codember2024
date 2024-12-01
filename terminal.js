const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const terminalAccess = (code, movements) => {
  let codeAccess = code.split("").map((digit) => parseInt(digit));
  let actualIndex = 0;

  for (let movement of movements) {
    switch (movement) {
      case "r":
        actualIndex++;
        if (actualIndex >= codeAccess.length) {
          actualIndex = 0;
        }
        break;
      case "l":
        actualIndex--;
        if (actualIndex < 0) {
          actualIndex = codeAccess.length - 1;
        }
        break;
      case "u": {
        let number = codeAccess[actualIndex] + 1;
        if (number > 9) {
          number = 0;
        }
        codeAccess[actualIndex] = number;
        break;
      }
      case "d": {
        let number = codeAccess[actualIndex] - 1;
        if (number < 0) {
          number = 9;
        }
        codeAccess[actualIndex] = number;
        break;
      }
    }
  }

  return codeAccess.join("");
};

readline.question("Terminal access for: \n", (message) => {
  const [code, movements] = message.toLowerCase().split(" ");
  const terminalCode = terminalAccess(code, movements.split(""));
  console.log("====================================");
  console.log("Answer =>", terminalCode);
  readline.close();
});
