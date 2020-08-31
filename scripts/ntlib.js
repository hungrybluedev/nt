export const gcd = (a, b) => {
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
