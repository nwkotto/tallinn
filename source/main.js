window.onload = function() {
	var el = document.querySelector('h1');
	console.log(el);

	el.addEventListener('click', function() {
		alert('it is really his first!!!');
	});
}