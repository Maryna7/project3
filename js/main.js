var menuButtoon = (function(){

	return{
		init: function(){
			$('.open-menu').on('click', function(e){
				e.preventDefault();
				var menuHolder = $('#wrapper');
				menuHolder.toggleClass("show");
			});	
		}
	}
}());

$(document).ready(function(){
	if($('.open-menu').length){
		menuButtoon.init();
	};
});