exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);
exports.avg = (numbers) => numbers.reduce((acc, current, idx, { length }) => (acc + current) / (idx === length - 1 ? length : 1), 0);
exports.sort = (numbers) => numbers.sort((a, b) => a - b);
exports.median = (numbers) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);

  return length % 2 ? numbers[middle] : (numbers[middle - 1] + numbers[middle]) / 2;
};
exports.mode = (numbers) => {
  const counts = numbers.reduce((acc, current) => acc.set(current, acc.get(current) + 1 || 1), new Map());
  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter((number) => counts.get(number) === maxCount);

  return modes.length > 1 ? (modes.length === numbers.length ? null : modes) : modes[0];
};
