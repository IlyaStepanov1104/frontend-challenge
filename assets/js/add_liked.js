//var cookie = document.cookie.split("=liked;");
//cookie[cookie.length - 1] = cookie[cookie.length - 1].substring(0, cookie[cookie.length - 1].length-6)
cookie = ["https://cdn2.thecatapi.com/images/at0.jpg", "https://cdn2.thecatapi.com/images/2d8.jpg"]
for (var i = 0; i < cookie.length; i++) {
	let div = document.createElement('div');
	div.style.background = "url(" + cookie[i] + ")";
	div.className = "img";
	div.innerHTML = '<button class="liked" id="' + cookie[i] + '"></button>';
	liked_block.append(div);
}
