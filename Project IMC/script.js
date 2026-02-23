const button = document.getElementById('calcular');

button.addEventListener('click', function () {
	const nome = document.getElementById('Name').value.trim();
	const altura = Number(document.getElementById('altura').value);
	const peso = Number(document.getElementById('peso').value);
	const resultado = document.getElementById('resultado');

	if (!nome || altura <= 0 || peso <= 0) {
		resultado.innerHTML = 'Preencha nome, altura e peso corretamente.';
		return;
	}

	const imc = peso / (altura * altura);
	let classificacao = '';

	if (imc < 18.5) {
		classificacao = 'Abaixo do peso';
	} else if (imc < 25) {
		classificacao = 'Peso normal';
	} else if (imc < 30) {
		classificacao = 'Sobrepeso';
	} else if (imc < 35) {
		classificacao = 'Obesidade grau 1';
	} else if (imc < 40) {
		classificacao = 'Obesidade grau 2';
	} else {
		classificacao = 'Obesidade grau 3';
	}

	resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
});