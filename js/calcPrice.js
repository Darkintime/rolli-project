function calcPrice() {
	const cartItems = document.querySelectorAll(`.cart-item`);
	const priceHTML = document.querySelector(`.total-price`); // находим  HTML элемент для цены в корзине

	let price = 0 // переменная будет динамическая и использоваться , по этому объявляем ее заранее через let

	cartItems.forEach(function (item) {

		const countItem = item.querySelector(`[data-counter]`); // кол-во пакетов роллов
		const currencyItem = item.querySelector(`.price__currency`); // цена одного пакета роллов
		const currency = parseInt(currencyItem.innerText) * parseInt(countItem.innerText); // общая цена

		price = currency + price; // подсчитываем стоимость товаров в корзине
	})

	priceHTML.innerText = price;
}