// phone
$(function() {
	$('.login_phone .users_login .zhuce span .xuank').click(function() {
		$(this).toggleClass('bgact');
	});
	$('.login_phone .xuanze').find('p').click(function() {
		$(this).addClass('act').siblings().removeClass('act');
		var i=$(this).index();
		var w=$('.login_phone .users_login form').width();
		$('.login_phone .users_login').animate({left: -w*i}, 300);
	});
	$('.login_phone .users_login form .mima .yj').click(function() {
		if ($(this).hasClass('yjb')) {
			$(this).removeClass('yjb').addClass('yjz');
			$('.login_phone .users_login form .mima input').attr('type', 'text');
		}else{
			$(this).removeClass('yjz').addClass('yjb');
			$('.login_phone .users_login form .mima input').attr('type', 'password');
		}
	});
});
// pc
$(function() {
	$('.login_pc .xuanze').find('p').click(function() {
		$(this).addClass('act').siblings().removeClass('act');
		var i=$(this).index();
		var w=$('.login_pc .users_login form').width();
		$('.login_pc .users_login').animate({left: -w*i},300);
	});
	$('.login_pc .users_login .zhuce span .xuank').click(function() {
		$(this).toggleClass('bgact');
	});
	$('.login_pc .users_login form .mima .yj').click(function() {
		if ($(this).hasClass('yjb')) {
			$(this).removeClass('yjb').addClass('yjz');
			$('.login_pc .users_login form .mima input').attr('type', 'text');
		}else{
			$(this).removeClass('yjz').addClass('yjb');
			$('.login_pc .users_login form .mima input').attr('type', 'password');
		}
	});
});