function like(block){
	if(block.classList.contains('heart')){
		document.cookie = block.id + "=liked;max-age=31556926";
		block.className = 'liked'
		console.log(document.cookie);
	} else if (block.classList.contains('liked')){
		block.className = 'heart'
	}
}

document.addEventListener('click', e => like(e.target))
