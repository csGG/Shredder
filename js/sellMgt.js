$(function(){
	//我的今年任务
	//任务状态切换
	$('.thisY li').click(function(){
		var obj = $(this),
			index = obj.index();
		obj.addClass('active').siblings().removeClass('active');
		if(index == 0){
			$('.statusT').load('../module/accepted.html',function(){
				select();
			});
		}
		if(index == 1){
			$('.statusT').load('../module/waitCheck.html');
		}
		if(index == 2){
			$('.statusT').load('../module/checked.html',function(){
				select();
			});
		}
		if(index == 3){
			$('.statusT').load('../module/created.html',function(){
				select();
			});
		}
		if(index == 4){
			$('.statusT').load('../module/notPass.html');
		}
		if(index == 5){
			$('.statusT').load('../module/creatWaitCheck.html');
		}
		if(index == 6){
			$('.statusT').load('../module/creatChecked.html',function(){
				select();
			});
		}
	});
	$('.thisY li').eq(0).trigger('click');

	//创建新任务
	$('.btn-create').click(function(){
		alert('1');
		$(window).parents('#plat').attr('id','../module/createNewTask.html');
	});

	//我的往年任务
	//任务状态切换
	$('.lastY li').click(function(){
		var obj = $(this),
			index = obj.index();
		obj.addClass('active').siblings().removeClass('active');
		if(index == 0){
			$('.statusL').load('../module/acceptedL.html',function(){
				select();
			});
		}
		if(index == 1){
			$('.statusL').load('../module/createdL.html',function(){
				select();
			});
		}
		if(index == 2){
			$('.statusL').load('../module/checkedL.html',function(){
				select();
			});
		}
		if(index == 3){
			$('.statusL').load('../module/creatCheckedL.html',function(){
				select();
			});
		}
	});
	$('.lastY li').eq(0).trigger('click');

	//全部销售任务
	//更多筛选项
	$('.center button').eq(2).click(function(){
		var mStatus = $('.hd').css('display');
		if(mStatus == 'none'){
			$('.hd').slideDown();
			$(this).html('收起<span class="fold"></span>');
		}
		else{
			$('.hd').slideUp();
			$(this).html('更多筛选<span class="unfold"></span>');
		}
	});
	//更多展开
	$('.filter .dMore ul li').each(function(){
		var tLen = $(this).length,
			index = $(this).index();
		if(index > 15){
			$(this).hide();
		}
	});
	$('.btn-more').on('click',function(){
		$(this).siblings('ul').find('li').show();
	});

	$('.dMore li').on('click',function(){
		var obj = $(this),
			index = obj.index();
		if(index == 0){
			obj.addClass('active');
			obj.siblings().addClass('active');
		}else{
			if(obj.hasClass('active')){
				obj.removeClass('active');
				obj.siblings().eq(0).removeClass('active');
			}else{
				obj.addClass('active');
			}
		}
	});


	//下拉框选择
	function select(){
		$('.sOption').each(function(){
			var so = $(this).siblings('select').find('option:selected').val();
			$(this).html(so);
		});
		$('.filter select').change(function(){
			var cv = $(this).find('option:selected').val();
			$(this).siblings('.sOption').html(cv);
		});
	}
});