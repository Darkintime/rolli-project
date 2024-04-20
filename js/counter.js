window.addEventListener('click', function (event) {   // event - данные с события про клик, в даном случае html объект, на который я попал

	if (event.target.dataset.action === 'plus') {        // event.target - получает html объект, .dataset.action - инфу про дата атрибут

		const counterDiv = event.target.closest('.counter-wrapper');   // .closest(class)  находит ближайший элемент с заданым в скобках кодом
		const counter = counterDiv.querySelector('[data-counter]');
		counter.innerText = ++counter.innerText;
	}
	if (event.target.dataset.action === 'minus') {        // event.target - получает html объект, .dataset.action - инфу про дата атрибут

		const counterDiv = event.target.closest('.counter-wrapper');   // .closest(class)  находит ближайший элемент с заданым в скобках кодом
		const counter = counterDiv.querySelector('[data-counter]');


		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			event.target.closest('.cart-item').remove(); // удаляем єлемент с 0 количеством
			calcPrice()
		}
	}

	if (event.target.hasAttribute(`data-action`) && event.target.closest(`.cart-wrapper`)) {
		calcPrice()
	}
});

// не удачная попытка ниже

// const btnMinus = document.querySelector('[data-action="minus"');
// const btnPlus = document.querySelector('[data-action="plus"');
// const counter = document.querySelector('[data-counter]');

// btnPlus.addEventListener('click', function () {

// 	counter.innerText = ++counter.innerText;
// });

// btnMinus.addEventListener('click', function () {
// 	console.log('minus haha');
// 	if (counter > 0) {
// 		counter.innerText = --counter.innerText;
// 	}

// });