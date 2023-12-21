/**
 * 是否是素数
 * @param n
 * @returns
 */
export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let num = 2; num < n; num++) {
    if (n % num === 0) {
      return false;
    }
  }

  return true;
}

/**
 * 随机数
 * @param min
 * @param max
 * @returns
 */
function getRandom(min: number, max: number): number {
  return Math.ceil(Math.random() * (max - min) + min);
}

/**
 *
 * @returns 颜色值
 */
export function getColor() {
  return `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`;
}
