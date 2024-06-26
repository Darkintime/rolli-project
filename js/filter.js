// const a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// for (let i = 0; i < a.length; i++) {
// 	for (let j = i; j < a.length; j++) {
// 		if (a[i] > a[j]) {
// 			let temp = a[i];
// 			a[i] = a[j];
// 			a[j] = temp
// 		}
// 		console.log(a);
// 	}
// }

const filterCard = document.querySelectorAll(`.product`);
// console.log(filterCard);



function sortAsc() {
	for (let i = 0; i < nav.length; i++) {
		for (let j = i; j < nav.length; j++) {
			if (+nav[i].getAttribute(`data-price`) > +nav[j].getAttribute(`data-price`)) {
				replacedNode = nav.replaceChild(nav[j], nav[i]);
				insertAfter(replacedNode, nav[i])
			}
		}
	}
}
function insertAfter(el, refEl) {
	return refEl.parentNode.insertBefore(el, redEl.nextSibling)
}

// document.querySelector(`nav`).addEventListener("click", (event) => {
// 	let filterClass = event.target.dataset[`filter`];
// 	console.log(filterClass);

// 	filterCard.forEach((el) => {
// 		el.classList.remove(`hide`);
// 		if (!el.classList.contains(filterClass) && filterClass !== `all`) {
// 			el.classList.add(`hide`);
// 		}
// 	})
// });

window.addEventListener("click", function (event) {
	// console.log(event);

	if (event.target.hasAttribute('data-sortAsc')) {
		document.querySelector(`.data-sortAsc`).onclick = sortAsc;
		filterCard.forEach((el) => {
			el.classList.remove(`hide`);
		})
	} else {
		document.querySelector(`nav`).addEventListener("click", (event) => {
			let filterClass = event.target.dataset[`filter`];

			filterCard.forEach((el) => {
				el.classList.remove(`hide`);
				if (!el.classList.contains(filterClass) && filterClass !== `all`) {
					el.classList.add(`hide`);
				}
			})
		});
	}
})



// Не знаю почему, не выходит полноценно убрать товар, пока только визуально

// Мои неудачные попытки


// const nav = document.querySelectorAll(`.product`);
// console.log(nav);
// console.log(nav.length);

// console.log(nav[3]);


// function insertAfter(el, refEl) {
// 	return refEl.parentNode.insertBefore(el, redEl.nextSibling)
// }


// window.addEventListener("click", function (event) {
// 	// console.log(event);

// 	if (event.target.hasAttribute('data-sortAsc')) {
// 		for (let i = 0; i < nav.length; i++) {
// 			for (let j = i; j < nav.length; j++) {
// 				if (+nav[i].getAttribute(`data-price`) > +nav[j].getAttribute(`data-price`)) {
// 					replacedNode = nav.replaceChild(nav[j], nav[i]);
// 					insertAfter(replacedNode, nav[i])
// 				}
// 			}
// 		}
// 	} else {
// 		document.querySelector(`nav`).addEventListener("click", (event) => {
// 			let filterClass = event.target.dataset[`filter`];

// 			filterCard.forEach((el) => {
// 				el.classList.remove(`hide`);
// 				if (!el.classList.contains(filterClass) && filterClass !== `all`) {
// 					el.classList.add(`hide`);
// 				}
// 			})
// 		});
// 	}
// })
