const gcd = (a: bigint, b: bigint): bigint => {
  // A lot of edge cases:
  // 1. (a, a) = a
  if (a === b) {
    return a;
  }
  // 2. (a, b) = (b, a) but having a > b is better for division.
  if (a < b) {
    return gcd(b, a);
  }
  // 3. Since a > b, we might have b < 0. Ensure add arguments are positive.
  if (b < 0n) {
    return gcd(a, -b);
  }
  // 4. everything divides 0
  if (b === 0n) {
    return a;
  }

  // The Euclidean Division algorithm
  let r = a % b;
  while (r !== 0n) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;
};

const getInputStringById = (id: string): string | null => {
  const inputElementOrNull = document.getElementById(id);
  if (!inputElementOrNull) {
    return null;
  }
  return (inputElementOrNull as HTMLInputElement).value;
};

const getInputValue = (id: string): bigint | null => {
  const stringValueOrNull = getInputStringById(id);
  return !stringValueOrNull ? null : BigInt(stringValueOrNull as string);
};

const setResult = (result: bigint) => {
  if (!result) {
    return;
  }
  paragraph.textContent = result.toString();
};

const clearResult = () => {
  paragraph.textContent = "";
};

const requestGCDFromInputs = () => {
  clearResult();
  const a = getInputValue("input-a");
  const b = getInputValue("input-b");
  // No output if either element is null
  if (!a || !b) {
    return;
  }
  setResult(gcd(a, b));
};

const reportError = (message: string) => {
  alert(
    message ||
      "JavaScript error. Try reloading the page or report an issue on Github"
  );
};

const gcdButtonOrNull = document.getElementById("gcd-button");
if (!gcdButtonOrNull) {
  reportError("");
}
const gcdButton = gcdButtonOrNull as HTMLButtonElement;
gcdButton.addEventListener("click", requestGCDFromInputs);
const paragraphOrNull = document.getElementById("result");
if (!paragraphOrNull) {
  reportError("");
}
const paragraph = paragraphOrNull as HTMLParagraphElement;
