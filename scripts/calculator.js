const input = document.getElementById('result')
const deleteString = document.getElementById('deleteString');
const deleteAll = document.getElementById('deleteAll');
const deleteOne = document.getElementById('deleteOne');
const plusMinus = document.getElementById('plusMinus');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const output = document.getElementById('resultNumber');
const numbers = document.getElementsByClassName('calculator__buttons__number')
const actions = document.getElementsByClassName('calculator__buttons__action')

function checkUser() {
    return fetch('http://learner16.creativityprojectcenter.ru/api.php', {
        method: 'POST',
        body: JSON.stringify({
            module: 'checkUser',
        })
    }).then(res => res.json())
}

function login(login, password) {
    return fetch('http://learner16.creativityprojectcenter.ru/api.php', {
        method: 'POST',
        body: JSON.stringify({
            module: 'auth',
            login,
            password
        })
    }).then(res => res.json())
}

function register(login, name, password) {
    return fetch('http://learner16.creativityprojectcenter.ru/api.php', {
        method: 'POST',
        body: JSON.stringify({
            module: 'reg',
            login,
            name,
            password
        })
    }).then(res => res.json())
}

// let isAuth = false;

// window.onload = () => {
//     checkUser()
//         .then(res => isAuth = res);
// }

const handlePlusMinus = () => {
    if (result.value != '0') {
        result.value = -result.value
    }
}
const handleDot = () => {

    if (!result.value.includes('.')) {
        result.value += '.'
    }
}
const number = (num) => {
    if (result.value == '0') {
        result.value = num
    }
    else {
        result.value += num
    }
}

const outputContainsAct = () => {
    const outputVal = output.innerHTML;
    const actions = ["*", "/", "+", "-"];

    for (let i = 0; i < actions.length; i++) {
        if (outputVal.includes(actions[i])) return true;
    }
    return false;
}

const action = (element) => {
    console.log(element)
    if (result.value !== '0' && !outputContainsAct()) {
        const act = element.innerHTML

        result.value += ` ${act}`;
        output.innerHTML += result.value;
        result.value = '0';
    } else {
        calc();
    }
}
const deleteAction = (index) => {
    switch (index) {
        case 0:
            result.value = '0'
            break

        case 1:
            result.value = '0'
            output.innerHTML = ''
            break
        case 2:
            result.value = result.value.slice(0, -1)
            console.log(result.value.slice(0, -1))
            break
    }
}
const calc = () => {
    if (isAuth && isAuth.name && isAuth.login) {
        const value = output.innerHTML + result.value;
        const resultValue = eval(value)
        if (resultValue.toString().length <= 10) {
            result.value = resultValue
        }
        else {
            const trimmedResult = Math.round(resultValue * 10e9) / 10e9
            console.log(trimmedResult, resultNumber)
            result.value = trimmedResult
        }
        output.innerHTML = '';
    } else {
        result.value = 'suck my dick'
    }
}
const arrayThree = [deleteString, deleteAll, deleteOne]
for (let i = 0; i < arrayThree.length; i++) {
    arrayThree[i].addEventListener('click', () => deleteAction(i))
}
equal.addEventListener('click', () => calc())
dot.addEventListener('click', () => handleDot())
plusMinus.addEventListener('click', () => handlePlusMinus())
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => number(numbers[i].innerHTML))
}
for (let i = 0; i < actions.length; i++) {
    actions[i].addEventListener('click', () => action(actions[i]))
}
document.addEventListener('keyup', (event) => {
    for (let i = 0; i < numbers.length; i++) {
        const btn = numbers[i].innerHTML;

        if (event.key == btn) {
            number(btn)
        }
    }
    for (let i = 0; i < actions.length; i++) {
        const act = actions[i].innerHTML;

        if (event.key == act) {
            action(actions[i])
        }
    }
    if (event.key == '.') {
        handleDot()
    }
    if (event.key == '=' || event.key == 'Enter') {
        calc()
    }
    if (event.key == 'Backspace') {
        deleteAction(2)
    }
})


