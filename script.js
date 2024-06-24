document.getElementById('shuffle-btn').addEventListener('click', function () {
	const container = document.getElementById('pentagon-container')
	const elementsArray = Array.from(container.children)
	while (elementsArray.length) {
		container.appendChild(
			elementsArray.splice(
				Math.floor(Math.random() * elementsArray.length),
				1
			)[0]
		)
	}
})
