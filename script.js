let btnAdd = document.querySelector("#add");
let btnSub = document.querySelector("#sub");

let input = document.querySelector("input");

btnAdd.addEventListener("click", () => {
	input.value = parseInt(input.value) + 1;
});

btnSub.addEventListener("click", () => {
	input.value = parseInt(input.value) - 1;
});
