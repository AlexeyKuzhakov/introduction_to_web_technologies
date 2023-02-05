// Получить от пользователя два числа и вывести в диологовое окно сумму значений,
// которые ввел пользователь

function sum(a, b) {
    return a + b;
}

const num1 = Number.parseFloat(prompt('Введите первое число:'));
const num2 = Number.parseFloat(prompt('Введите второе число:'));
alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`);
