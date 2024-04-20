// специальная функция для воссоздания продуктов с json файла
const products = document.querySelector(`#products`)

async function getProducts() {
	const response = await fetch('./js/products.json');
	console.log(response);
}

getProducts();