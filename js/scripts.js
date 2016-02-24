$(function () {
	$('.labels').on('click', 'a[data-for-what]', function(event) {
		if ( !($(this).parent().hasClass('label-active')) ) {

			$('.label').removeClass('label-active');
			$(this).parent().addClass('label-active');

			var forWhat = '.' + $(this).attr('data-for-what');
			$('.sheet').addClass('hide');
			$(forWhat).removeClass('hide');
		}
		event.preventDefault();
	});

	$('#first-name, #last-name').mouseenter(function() {
		$(this).next()
		.animate({'opacity': 1}, {queue: 'x'})
		.dequeue('x');
	});

	$('#first-name, #last-name').mouseleave(function() {
		$(this).next()
		.animate({'opacity': 0}, {queue: 'x'})
		.dequeue('x');
	});

	$('button').click(function() {
		$(this).blur();
	});

	$('.help').click(function(event) {
		$('.helping').animate({
			'opacity': 1,
			});
		event.preventDefault();
	});
});