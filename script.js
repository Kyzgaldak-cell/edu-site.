let level = 'easy';
let correctAnswer = 0;
let userInput = '';

function setLevel(newLevel) {
    level = newLevel;
    generateTask();
}

function generateTask() {
    let num1, num2, operation;

    do {
        if (level === 'easy') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
        } else if (level === 'medium') {
            num1 = Math.floor(Math.random() * 90) + 10;
            num2 = Math.floor(Math.random() * 90) + 10;
        } else {
            num1 = Math.floor(Math.random() * 900) + 100;
            num2 = Math.floor(Math.random() * 900) + 100;
        }

        operation = Math.random() < 0.5 ? '+' : '-';

        if (operation === '-' && num1 < num2) {
            [num1, num2] = [num2, num1];
        }

    } while (operation === '-' && num1 - num2 < 0);

    correctAnswer = operation === '+' ? num1 + num2 : num1 - num2;
    document.getElementById('task').innerText = `${num1} ${operation} ${num2} = ?`;
    document.getElementById('answerDisplay').innerText = '';
    userInput = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('nextTask').style.display = 'none';
}

function addNumber(num) {
    userInput += num;
    document.getElementById('answerDisplay').innerText = userInput;
}

function clearAnswer() {
    userInput = '';
    document.getElementById('answerDisplay').innerText = '';
}

function checkAnswer() {
    if (parseInt(userInput) === correctAnswer) {
        document.getElementById('feedback').innerHTML = 'Дұрыс! 😊';
        document.getElementById('feedback').style.color = 'green';
        document.getElementById('nextTask').style.display = 'block';
    } else {
        document.getElementById('feedback').innerHTML = 'Қате! Қайта көріңіз!';
        document.getElementById('feedback').style.color = 'red';
    }
}

window.onload = generateTask;