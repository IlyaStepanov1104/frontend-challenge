function like(block){
	//ЕСЛИ У БЛОКА, ПО КОТОРОМУ КЛИКНУЛИ КЛАСС heart, ТО ЭТО НЕАКТИВНОЕ СЕРДЦЕ
	if(block.classList.contains('heart')){
		//СОХРАНЯЕМ ССЫЛКУ В КУКИ
		document.cookie = block.id + "=liked;max-age=31556926";
		//МЕНЯЕМ КЛАСС НА ИЗБРАННОЕ
		block.className = 'liked'
	//ЕСЛИ У БЛОКА, ПО КОТОРОМУ КЛИКНУЛИ КЛАСС liked, ТО ЭТО АКТИВНОЕ СЕРДЦЕ
	} else if (block.classList.contains('liked')){
		//УДАЛЯЕМ ИЗ КУКИ
		document.cookie = block.id + "=;max-age=-1";
		//МЕНЯЕМ КЛАСС НА НЕИЗБРАННОЕ
		block.className = 'heart'
	}
}

// ОТСЛЕЖИВАЕМ ВСЕ КЛИКИ НА САЙТЕ
document.addEventListener('click', e => like(e.target))
