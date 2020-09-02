import { gcd } from "./ntlib.js";

const tests = {
  "$\\gcd(24, 18) = 6$": (): string => {
    return gcd(24n, 18n) === 6n ? "Passed" : "Failed";
  },
  "$\\gcd(14, 0) = 14$": (): string => {
    return gcd(14n, 0n) === 14n ? "Passed" : "Failed";
  },
  "$\\gcd(100, 35) = \\gcd(35, 100)$": (): string => {
    return gcd(100n, 35n) === gcd(35n, 100n) ? "Passed" : "Failed";
  },
  "$\\gcd(-26, 39) = \\gcd(26, 39)$": (): string => {
    return gcd(-26n, 39n) === gcd(26n, 39n) ? "Passed" : "Failed";
  },
  "$\\gcd(1, 1) = 1$": (): string => {
    return gcd(1n, 1n) === 1n ? "Passed" : "Failed";
  },
  "$\\gcd(0, 0) = 0$": (): string => {
    return gcd(0n, 0n) === 0n ? "Passed" : "Failed";
  },
};

const table = document.getElementById("table-for-tests") as HTMLTableElement;

Object.entries(tests).forEach(([key, value]) => {
  const currentTestRow = table.insertRow();

  const testNameCell = currentTestRow.insertCell();
  testNameCell.textContent = key;

  const testResultCell = currentTestRow.insertCell();
  const result = value();
  testResultCell.textContent = result;

  if (result.indexOf("[skip]") > -1) {
    testResultCell.style.backgroundColor = "#eee";
  } else if (result === "Passed") {
    testResultCell.style.backgroundColor = "#afa";
  } else {
    testResultCell.style.backgroundColor = "#faa";
  }
});
