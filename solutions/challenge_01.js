const accessTries = (log) => {
  const passwords = log.split("\n");
  let goodAccesses = 0;
  let badAccesses = 0;
  const validRegex = /^\d*[a-z]*$/;
  passwords.forEach((password) => {
    if (validRegex.test(password)) {
      const numbers = password.match(/^\d*/)[0];
      const text = password.match(/[a-z]*$/)[0];
      let numbersOk = true;
      let textOk = true;
      for (let i = 1; i < numbers.length; i++) {
        const prevNumber = numbers[i - 1];
        const number = numbers[i];
        if (prevNumber.localeCompare(number) > 0) {
          numbersOk = false;
          break;
        }
      }
      for (let i = 1; i < text.length; i++) {
        const prevChar = text[i - 1];
        const char = text[i];
        if (prevChar.localeCompare(char) > 0) {
          textOk = false;
          break;
        }
      }
      if (numbersOk && textOk) {
        goodAccesses++;
      } else {
        badAccesses++;
      }
    } else {
      badAccesses++;
    }
  });
  return `${goodAccesses}true${badAccesses}false`;
};

fetch("https://codember.dev/log.txt")
  .then((res) => res.text())
  .then((log) => console.log(accessTries(log)));
