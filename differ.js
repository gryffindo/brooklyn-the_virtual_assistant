// To Do list Staet

const selecItem = document.querySelector('.body ul');
const selectForm = document.querySelector('.todo');

selecItem.addEventListener('click', (e) => {
	if (e.target.tagName == 'LI') {
		if (e.target.classList.contains('done')) {
			e.target.classList.remove('done');
		} else {
			e.target.classList.add('done');
		}
	}

	if (e.target.classList.contains('remove')) {
		e.target.parentNode.remove();
	}
})

selectForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const input = e.target.task.value;

	if(validateInput (input, e.target.task)) {
		selecItem.insertAdjacentElement('afterbegin', newItem(e.target.task.value));

		e.target.task.value = '';
	
	}
})

const validateInput = (input, element) => {
	if (input) {
		element.parentNode.classList.remove('error');

		return true;
	} else {
		element.parentNode.classList.add('error');

		return false;
	}
}

const newItem = (content) => {
	const createAItem = document.createElement('li');
	createAItem.textContent = content;
	createAItem.insertAdjacentElement('afterbegin', removeButton());

	return createAItem;
}

const removeButton = () => {
	const createRemoveBtn = document.createElement('span');
	createRemoveBtn.classList.add('remove');
	createRemoveBtn.textContent = 'X';

	return createRemoveBtn;
}

// To DO List End

// Clock Start
const deg = 6;
		const hr = document.querySelector('#hr');
		const mn = document.querySelector('#mn');
		const sc = document.querySelector('#sc');

		setInterval(() => {
			let day = new Date();
			let hh = day.getHours() * 30;
			let mm = day.getMinutes() * deg;
			let ss = day.getSeconds() * deg;

			hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
			mn.style.transform = `rotateZ(${mm}deg)`;
			sc.style.transform = `rotateZ(${ss}deg)`;
		})
// Clock End