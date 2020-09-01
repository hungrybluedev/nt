export const getInputStringById = (id) => {
    const inputElementOrNull = document.getElementById(id);
    if (!inputElementOrNull) {
        return null;
    }
    return inputElementOrNull.value;
};
export const getInputValue = (id) => {
    const stringValueOrNull = getInputStringById(id);
    return !stringValueOrNull ? null : BigInt(stringValueOrNull);
};
