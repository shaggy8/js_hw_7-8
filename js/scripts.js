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

	$('.ok').click(function(event) {
		if ($('#first-name').val() == 'Анастасія' &&
			$('#last-name').val() == 'Ніконорова') {

			$('.rabbid').css({
				'background': 'url(pic/rabbid.jpg)',
				'box-shadow': '0px 0px 80px 8px rgba(68,51,129,1)'});
		} else {
			$('.rabbid').css({
				'background': 'url(pic/rabbid.jpg) -348px 0',
				'box-shadow': '0px 0px 80px 8px rgba(128,29,86,1)'});
		}

		$('.rabbid')
		.css('top', function() {
			return ($(window).height() / 2) - ($('.rabbid').height() / 2);
		})
		.css('left', function() {
			return ($(window).width() / 2) - ($('.rabbid').width() / 2);
		})
		.slideDown('slow');

		event.preventDefault();
	});

	$('.close').click(function(event) {
		$(this).parent().slideUp('slow');

		event.preventDefault();
	});
});