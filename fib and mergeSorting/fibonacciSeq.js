const fibs = (n) => {
  let sequence = [];

  if (n <= 0) return;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
};
console.log(fibs(8));

const fibRecursive = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = fibRecursive(n - 1);
  const nextValue =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];

  return [...sequence, nextValue];
};
console.log(fibRecursive(8));
