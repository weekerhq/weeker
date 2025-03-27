
export function assertInt(value: string | undefined): number {
  if (value == null) throw new Error('value is not defined');
  const int = parseInt(value);
  if (isNaN(int)) throw new Error('value is not an integer');
  return int;
}
