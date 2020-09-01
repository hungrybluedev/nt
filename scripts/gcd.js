import { gcd } from "./ntlib.js";
import { getInputValue } from "./util.js";
const setResult = (a, b, result) => {
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
    if (!a || !b) {
        return;
    }
    setResult(a, b, gcd(a, b));
    const event = document.createEvent("Event");
    event.initEvent("DOMContentLoaded", true, true);
    document.dispatchEvent(event);
    paragraph.scrollIntoView();
};
const reportError = (message) => {
    alert(message ||
        "JavaScript error. Try reloading the page or report an issue on Github");
};
const gcdButtonOrNull = document.getElementById("gcd-button");
if (!gcdButtonOrNull) {
    reportError("");
}
const gcdButton = gcdButtonOrNull;
gcdButton.addEventListener("click", requestGCDFromInputs);
const paragraphOrNull = document.getElementById("result");
if (!paragraphOrNull) {
    reportError("");
}
const paragraph = paragraphOrNull;
