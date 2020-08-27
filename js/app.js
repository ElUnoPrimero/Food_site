$(document).ready(function () {

    $('.burger_menu').click(function (event) {
		$('.burger_menu , .header_menu_mb').toggleClass('active');
		$('body').toggleClass('lock');
	});
    
});