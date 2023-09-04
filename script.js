const a = prompt('Введіть перше число');
const b = prompt('Введіть друге число');

if (isNaN(a) || isNaN(b) || a === '' || b === '') {
	alert('Ви ввели не число або залишили одне або обидва поля порожніми');
} else {
	const numA = +a;
	const numB = +b;

	const sum = numA + numB;
	const difference = numA - numB;
	const product = numA * numB;
	const quotient = numA / numB;

	const resultMessage = `
    ${a} + ${b} = ${sum}
    ${a} - ${b} = ${difference}
    ${a} * ${b} = ${product}
    ${a} / ${b} = ${quotient}
  `;

	alert(resultMessage);
}