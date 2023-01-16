document.addEventListener('DOMContentLoaded', function() {
	document.body.innerHTML = document.body.innerHTML.replace(/ות[\.,/]ים/gi, 'ות');
	document.body.innerHTML = document.body.innerHTML.replace(/ים[\.,/]ות/gi, 'ים');
	document.body.innerHTML = document.body.innerHTML.replace(/איש[\.,/][תה]/gi, 'איש');
	document.body.innerHTML = document.body.innerHTML.replace(/ם[\.,/]?ן/gi, 'ם');
	document.body.innerHTML = document.body.innerHTML.replace(/ן[\.,/]?ם/gi, 'ם');
	document.body.innerHTML = document.body.innerHTML.replace(/א[\.,/]נשים/gi, 'אנשים');
});