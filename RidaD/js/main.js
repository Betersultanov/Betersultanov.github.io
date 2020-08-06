jQuery(document).ready(function($) {
$('.main_btn').on('click', function (event) {
				event.preventDefault();
				$('.popup').fadeIn();
			});

$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#popup1"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut(); // скрываем его
		}
	});
});	


jQuery(document).ready(function($) {
$('.red_h p').on('click', function (event) {
				event.preventDefault();
				$('.popup').fadeIn();
			});

$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#popup1"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut(); // скрываем его
		}
	});
});	


