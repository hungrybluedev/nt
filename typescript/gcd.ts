import { gcd } from "./ntlib.js";
import { getInputValue } from "./util.js";

const setResult = (a: bigint, b: bigint, result: bigint) => {
  if (result === null) {
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
  if (a === null || b === null) {
    return;
  }
  setResult(a as bigint, b as bigint, gcd(a as bigint, b as bigint));
  const event = document.createEvent("Event");
  event.initEvent("DOMContentLoaded", true, true);
  document.dispatchEvent(event);
  paragraph.scrollIntoView();
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
