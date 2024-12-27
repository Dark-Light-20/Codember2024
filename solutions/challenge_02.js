const omegaEscape = (log) => {
  const steps = log.split("\n");
  let stepsGeneralCounter = 0;
  let lastStepsCounter = 0;
  steps.forEach((instructions) => {
    lastStepsCounter = 0;
    const positions = instructions.split(" ").map((item) => parseInt(item));
    let actualPositionIndex = 0;
    let actualPosition = positions[actualPositionIndex];
    while (actualPosition !== undefined) {
      const previousPositionIndex = actualPositionIndex;
      actualPositionIndex += actualPosition;
      positions[previousPositionIndex]++;
      stepsGeneralCounter++;
      lastStepsCounter++;
      actualPosition = positions[actualPositionIndex];
    }
  });
  return `${stepsGeneralCounter}-${lastStepsCounter}`;
};

fetch("https://codember.dev/trace.txt")
  .then((res) => res.text())
  .then((log) => console.log(omegaEscape(log)));
