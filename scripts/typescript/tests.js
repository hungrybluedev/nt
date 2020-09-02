import { gcd } from "scripts/ntlib.js";
const listOfIds = ["gcd-24-18-is-6", "gcd-14-0-is-14"];
const listOfTests = {
    "gcd-24-18-is-6": () => {
        return gcd(24n, 18n) === 6n ? "Success" : "gcd(24, 18) should be 6";
    },
    "gcd-14-0-is-14": () => {
        return gcd(14n, 0n) === 14n ? "Success" : "gcd(14, 0) should be 14";
    },
    "gcd-100-35-is-gcd-35-100": () => {
        return gcd(100n, 35n) === gcd(35n, 100n)
            ? "Success"
            : "gcd(100, 35) should be equal to gcd(35, 100)";
    },
};
const couldNotLoadTest = () => {
    return "Failed to load";
};
const getTestDivById = (suffix) => {
    const divElement = document.getElementById("test-" + suffix);
    if (!divElement) {
        return null;
    }
    return divElement;
};
const initializeState = () => {
    const state = {};
    for (const id of listOfIds) {
        state[id] = getTestDivById(id);
    }
    return state;
};
const state = initializeState();
console.log(state);
