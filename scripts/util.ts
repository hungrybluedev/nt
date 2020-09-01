export const getInputStringById = (id: string): string | null => {
  const inputElementOrNull = document.getElementById(id);
  if (!inputElementOrNull) {
    return null;
  }
  return (inputElementOrNull as HTMLInputElement).value;
};

export const getInputValue = (id: string): bigint | null => {
  const stringValueOrNull = getInputStringById(id);
  return !stringValueOrNull ? null : BigInt(stringValueOrNull as string);
};