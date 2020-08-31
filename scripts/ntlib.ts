export const gcd = (a: bigint, b: bigint): bigint => {
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

