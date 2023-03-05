export function debugLog(...args: unknown[]) {
  const date = new Date();
  console.log(
    `${date.getMinutes()}:${(
      date.getSeconds() +
      date.getMilliseconds() / 1000
    ).toFixed(3)}`,
    ...args
  );
}
