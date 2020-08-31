"use strict";
const gcd = (a, b) => {
    if (a === b) {
        return a;
    }
    if (a < b) {
        return gcd(b, a);
    }
    if (b < 0n) {
        return gcd(a, -b);
    }
    if (b === 0n) {
        return a;
    }
    let r = a % b;
    while (r !== 0n) {
        a = b;
        b = r;
        r = a % b;
    }
    return b;
};
const getInputStringById = (id) => {
    const inputElementOrNull = document.getElementById(id);
    if (!inputElementOrNull) {
        return null;
    }
    return inputElementOrNull.value;
};
const getInputValue = (id) => {
    const stringValueOrNull = getInputStringById(id);
    return !stringValueOrNull ? null : BigInt(stringValueOrNull);
};
const setResult = (a, b, result) => {
    if (!result) {
        return;
    }
    paragraph.innerHTML =
        "<h1>Result</h1><p>The GCD of " +
            a.toString() +
            " and " +
            b.toString() +
            ' is</p><p class="highlighted-result">' +
            result.toString() +
            "</p>";
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
