
const n1Element= document.getElementById("num1") as HTMLInputElement;
const n2Element= document.getElementById("num2") as HTMLInputElement;
const buttonElement= document.querySelector('button')!;

type NumOrStr= number | string

const numResult : number[]= [];
const strResult: string[]=[]

function Add(n1: NumOrStr, n2: NumOrStr){
    if(typeof n1 === 'number' && typeof n2 === 'number'){
    return n1+ n2;}
    else if( typeof n2 === 'string' && typeof n2 === 'string'){
        return n1 + " " + n2
    }
    return +n1 + +n2
}

function printResult(resultObj : { val : number ; timestamp: Date}){
    console.log(resultObj.val)
}

buttonElement.addEventListener('click', ()=>{
    const num1= n1Element.value;
    const num2= n2Element.value;
    const result= Add(+num1, +num2);
    numResult.push(result as number);
    const stringresult= Add(num1, num2)
    strResult.push(stringresult as string)
    
    printResult({val: result as number, timestamp: new Date()})
    console.log(numResult, strResult);
})

