const input = document.getElementById('result')
const deleteString = document.getElementById('deleteString');
const deleteAll = document.getElementById('deleteAll');
const deleteOne = document.getElementById('deleteOne');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const plusMinus = document.getElementById('plusMinus');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const output = document.getElementById('resultNumber');
const numbers = document.getElementsByClassName('calculator__buttons__number')
console.log(numbers)
const handlePlusMinus = () => {
    if (result.value != '0')  {
        result.value = -result.value
    }
}
const handleDot = () => {
    result.value +='.'
}
const number = (num) => { 
    if (result.value == '0'){
        result.value = num
    }
    else {
        result.value +=num
    }
}

const action = (element) => { 
    
    if (result.value !== '0') {
        const act = element.innerHTML 
        result.value += ` ${act}`;
        output.innerHTML+= result.value;
        result.value = '';
    }
}
const deleteAction = (index) => {
    switch(index) {
        case 0:  
          result.value = '0'
          break 
      
        case 1:  
          result.value = '0'
          output.innerHTML = ''
          break
        case 2:
          result.value = result.value.slice(0,-1)
          console.log(result.value.slice(0,-1))
          break
      }
}
const calc = () =>{
    
    const value = output.innerHTML+ result.value;
    const resultValue = eval(value)
    if (resultValue.toString().length<=10){
        result.value = resultValue
    }
    else {
        const trimmedResult = Math.round(resultValue*10e9)/10e9
        console.log(trimmedResult, resultNumber)
        result.value = trimmedResult
    }
    output.innerHTML = '';
}
const arrayTwo = [plus, minus, multiply,divide]
for (let j = 0; j< arrayTwo.length; j++)
{
    arrayTwo[j].addEventListener('click',()=> action(arrayTwo[j]))
}
const arrayThree = [deleteString,deleteAll,deleteOne]
for (let i = 0; i< arrayThree.length;i++)
{
    arrayThree[i].addEventListener('click',()=> deleteAction(i))
}

equal.addEventListener('click',() => calc() )
dot.addEventListener('click',()=> handleDot())
plusMinus.addEventListener('click',()=> handlePlusMinus())
for (let i = 0; i< numbers.length; i++){
    numbers[i].addEventListener('click',()=> number(numbers[i].innerHTML))
}
document.addEventListener('keyup',(event) => {
    for (let i = 0; i < numbers.length;i++){
        const btn = numbers[i].innerHTML;
     
        if (event.key== btn){
            number(btn)
        }
    }
console.log(event.key)
})

