function like(block){
	if(block.classList.contains('heart')){
		document.cookie = block.id + "=liked;max-age=31556926";
		block.className = 'liked'
	} else if (block.classList.contains('liked')){
		document.cookie = block.id + "=;max-age=-1";
		block.className = 'heart'
	}
	console.log(document.cookie);
}

document.addEventListener('click', e => like(e.target))
