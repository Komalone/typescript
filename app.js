var n1Element = document.getElementById("num1");
var n2Element = document.getElementById("num2");
var buttonElement = document.querySelector('button');
var numResult = [];
var strResult = [];
function Add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else if (typeof n2 === 'string' && typeof n2 === 'string') {
        return n1 + " " + n2;
    }
    return +n1 + +n2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', function () {
    var num1 = n1Element.value;
    var num2 = n2Element.value;
    var result = Add(+num1, +num2);
    numResult.push(result);
    var stringresult = Add(num1, num2);
    strResult.push(stringresult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult, strResult);
});
