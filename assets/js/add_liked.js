var cookie = document.cookie.split("=liked;");
for (var i = 0; i < cookie.length; i++) {
	let div = document.createElement('div');
	div.addClass = "img";
	div.innerHTML = cookie[i];
	liked_block.append(div);
}
