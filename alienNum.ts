function alienNum(s: string): number {
  const alienNumbersArrayObj = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const nextChar = s[i + 1];
    if (alienNumbersArrayObj[currentChar] === undefined) {
      throw new Error(`Invalid character: ${currentChar}`);
    }

    if (alienNumbersArrayObj[currentChar] < alienNumbersArrayObj[nextChar]) {
      result = result - alienNumbersArrayObj[currentChar];
    } else {
      result = result + alienNumbersArrayObj[currentChar];
    }
  }
  return result;
}

alienNum("AB"); // Output: 4
alienNum("ZCABA"); // Output: 95
