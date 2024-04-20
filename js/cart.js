const cartWrapper = document.querySelector('.cart-wrapper')


window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.card'); // отслеживаем карточку, где нажали "+ в корзину" 

		const productInfo = {   // создаем объект для сбора инфы об товаре, которую запихнем в шаблон для динмичной верстки корзины
			id: card.dataset.id,
			img: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		}

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);  // ищем элемент в корзине


		if (itemInCart != null) {      //если itemInCart = null ==> false в проверке, значит условие не выполниться
			// const counterElementNum = parseInt(counterElement.innerText); НЕ СРАБОТАЛО
			// counterElement.innerText = counterElementNum + productInfo.counter; НЕ СРАБОТАЛО
			const counterElement = itemInCart.querySelector(`[data-counter]`);  // получаем данные об кол-ве товара, который уже был в корзине
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			// Обожаю эти шаблоны, лучшее, что придумало человечество
			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
		<div class="cart-item__top">
			<div class="cart-item__img">
				<img src="${productInfo.img}" alt="">
			</div>
			<div class="cart-item__desc">
				<div class="cart-item__title">${productInfo.title}</div>
				<div class="cart-item__weight">${productInfo.itemsInBox} - ${productInfo.weight}</div>

				<!-- cart-item__details -->
				<div class="cart-item__details">

					<div class="items items--small counter-wrapper">
						<div class="items__control" data-action="minus">-</div>
						<div class="items__current" data-counter="">${productInfo.counter}</div>
						<div class="items__control" data-action="plus">+</div>
					</div>

					<div class="price">
						<div class="price__currency">${productInfo.price}</div>
					</div>

				</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML); // генерим наш товар в корзине
		}

		calcPrice() // подсчитываем стоимость заказа
	}
})