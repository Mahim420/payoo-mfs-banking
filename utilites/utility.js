function getValueById(id) {
    const value = document.getElementById(id).value;
    const ConvertedValue = parseFloat(value);
    return ConvertedValue;
};

function getInnerTextById(id) {
    const text = document.getElementById(id).innerText;
    const ConvertedText = parseFloat(text);
    return ConvertedText;
};

function setElement(id, value) {
    document.getElementById(id).innerText = value;
};