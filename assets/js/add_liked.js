var cookie = document.cookie.split("=liked;");
cookie[cookie.length - 1].splice(-6, 6)
for (var i = 0; i < cookie.length; i++) {
	let div = document.createElement('div');
	div.addClass = "img";
	div.innerHTML = cookie[i];
	liked_block.append(div);
}
