

const checkValidVar = (variable) => {

    if (
    typeof variable !== "undefined" &&
    variable !== "" &&
    variable !== " " &&
    variable !== null &&
    variable !== "null" &&
    variable !== "undefined" &&

    !variable.includes("null") &&
    !variable.includes("undefined") &&
    variable.length !== 0
    //variable
    ) return true;

    return false;
}

export default checkValidVar;