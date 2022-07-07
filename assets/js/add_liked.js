var cookie = document.cookie.split("=liked;");
cookie[cookie.length - 1] = cookie[cookie.length - 1].substring(0, cookie[cookie.length - 1].length-6)
for (var i = 0; i < cookie.length; i++) {
	let div = document.createElement('div');
	div.style.background = "url(" + cookie[i] + ")";
	div.className = "img";
	div.innerHTML = '<button class="liked" id="' + cookie[i] + '"></button>';
	liked_block.append(div);
}
