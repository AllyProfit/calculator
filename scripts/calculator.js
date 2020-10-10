const input = document.getElementById('result')
const deleteString = document.getElementById('deleteString');
const deleteAll = document.getElementById('deleteAll');
const deleteOne = document.getElementById('deleteOne');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const minus = document.getElementById('minus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const plus = document.getElementById('plus');
const plusMinus = document.getElementById('plusMinus');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const zero = document.getElementById('zero');
const output = document.getElementById('resultNumber');
const number = (num) => { 
    result.value +=num;
}

const action = (element) => { 
    const act = element.innerHTML 
    result.value += ` ${act}`;
    output.innerHTML+= result.value;
    result.value = '';
}
const deleteAction = (index) => {
    switch(index) {
        case 0:  
          result.value = ''
          break 
      
        case 1:  
          result.value = ''
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
result.value = eval(value)
output.innerHTML = '';
}
const array = [
    zero, one, two, three, four, five, six, seven, eight, nine
]
for (let i = 0; i< array.length; i++)
{
array[i].addEventListener('click',()=> number(i))
};
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