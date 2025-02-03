export function countAlphanumeric(str: string): number {
  const matches = str.match(/[a-zA-Z0-9]/g);
  return matches ? matches.length : 0;
}
