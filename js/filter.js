const filterCard = document.querySelectorAll(`.product`);
console.log(filterCard);

document.querySelector(`nav`).addEventListener("click", (event) => {
	if (event.target.tagName !== "LI") return false;

	let filterClass = event.target.dataset[`filter`];
	console.log(filterClass);

	filterCard.forEach((el) => {
		el.classList.remove(`hide`);
		if (!el.classList.contains(filterClass) && filterClass !== `all`) {
			el.classList.add(`hide`)
		}
	})
});


// Не знаю почему, не выходит полноценно убрать товар, пока только визуально