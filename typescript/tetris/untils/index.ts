/**
 * 生成随机数(包含最大值)
 * @param min
 * @param max
 */
export const getRandom = (min: number, max: number) => {
  const diff = max - min;

  return Math.round(Math.random() * diff + min);
};
