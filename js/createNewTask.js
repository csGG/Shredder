$(function(){
	//下一步
	$('.btn-next').click(function(){
		$('.step-first').hide();
		$('.step-second').show();
		$('.text .right').find('p').eq(0).addClass('sp').removeClass('spd');
		$('.text .right').find('p').eq(1).addClass('cn').removeClass('cnd');
		$('.step').find('div').eq(1).addClass('step-1').removeClass('step-2');
	});
	//上一步
	$('.btn-pre').click(function(){
		$('.step-first').show();
		$('.step-second').hide();
		$('.text .right').find('p').eq(0).addClass('spd').removeClass('sp');
		$('.text .right').find('p').eq(1).addClass('cnd').removeClass('cn');
		$('.step').find('div').eq(1).addClass('step-2').removeClass('step-1');

	});
	//提交
	$('.btn-submit').click(function(){
		//提交成功跳转到success页面，失败则跳转到failed页面
		var iframe = $(window.parent.document).find('#newTask');
		iframe.attr('src','../module/success.html');
	});
});