// Retunrs value of a input field and clears it
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldStr = inputField.value;
    const inputFieldvalue = parseFloat(inputFieldStr);

    inputField.value = '';
    return inputFieldvalue;
}

// Returns innertext of an element
function getElementInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementStr = element.innerText;
    const elementInnerText = parseFloat(elementStr);

    return elementInnerText;
}

// Sets innerText of an element
function setElementInnerTextById(elementId , innerText) {
    const element = document.getElementById(elementId);
    element.innerText = innerText;
}

