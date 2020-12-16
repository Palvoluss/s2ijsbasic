

let btnAdd = document.querySelector("#add");
let btnSub = document.querySelector("#sub");

let input = document.querySelector("input");

btnAdd.addEventListener("click", () => {
	if (input.value<Math.pow(2,32)) {
		input.value = parseInt(input.value) + 1;
	} else {alert("Seriamente?")};
});

btnSub.addEventListener("click", () => {
	if (input.value>-Math.pow(2,32)) {
		input.value = parseInt(input.value) - 1;
	} else {alert("Problemi di insonnia?")}
});
