import { gcd } from "./ntlib.js";

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

const setResult = (a: bigint, b: bigint, result: bigint) => {
  if (!result) {
    return;
  }
  paragraph.innerHTML =
    "<h1>Result</h1><p>The GCD of $" +
    a.toString() +
    "$ and $" +
    b.toString() +
    '$ is</p><p class="highlighted-result">$' +
    result.toString() +
    "$</p>";
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
  setResult(a, b, gcd(a, b));
  const event = document.createEvent("Event");
  event.initEvent("DOMContentLoaded", true, true);
  document.dispatchEvent(event);
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
