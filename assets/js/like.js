function like(block){
	if(block.classList.contains('heart')){
		block.className = 'liked'
	} else if (block.classList.contains('liked')){
		block.className = 'heart'
	}
}

document.cookie = "name=user;max-age=31556926";
console.log(document.cookie);
document.addEventListener('click', e => like(e.target))
