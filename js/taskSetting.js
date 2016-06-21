$(function(){

	//模拟下拉框
	$('.mDrop').each(function(){
		var val_ = $(this).siblings('select').find('option:selected').val()
		$(this).html(val_);
	});
	$('.check select').change(function(){
		var sVal = $(this).find('option:selected').val();
		$(this).siblings('.mDrop').html(sVal);
	});

	//部门筛选
	$('.operate ul li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	//部门分组操作
	$('.deTable tbody tr').each(function(){
		var obj = $(this);
		var btnObj =  obj.find('td').eq(2).find('button');
		$(document).on('click','.deTable tbody td button',function(){
			var objTxt = $(this).text();
			if(objTxt == '分配任务'){
				$(this).parents('td').siblings().eq(1).html('分配任务');
				$(this).parents('td').html('<button>不分配任务</button>');
			}
			else{
				$(this).parents('td').siblings().eq(1).html('不分配任务');
				$(this).parents('td').html('<button>分配任务</button>');
			}
		});
	});

	//员工分组操作
	$('.emTable tbody tr').each(function(){
		var obj = $(this);
		var btnObj =  obj.find('td').eq(6).find('button');
		$(document).on('click','.emTable tbody td button',function(){
			var objTxt = $(this).text();
			if(objTxt == '填报职级任务'){
				$(this).parents('td').siblings().eq(5).html('填报职级任务');
				$(this).parents('td').html('<button>不填报职级任务</button>');
			}
			else{
				$(this).parents('td').siblings().eq(5).html('不填报职级任务');
				$(this).parents('td').html('<button>填报职级任务</button>');
			}
		});
	});

	//职级任务标准
	$('.leTable tbody tr').each(function(){

	 	if($(this).find('td').eq(10).text() == '禁用'){
	 		$(this).find('td').eq(10).css('color','#03a15c');
		}

		$(this).find('td').eq(11).children().eq(1).click(function(){
			var obj = $(this);
			if(obj.text() == '禁用'){
				obj.parent().siblings('td').eq(10).html('禁用');
				obj.html('启用');
				obj.parent().siblings('td').eq(10).css('color','#03a15c');
			}
			else{
				obj.parent().siblings('td').eq(10).html('正常');
				obj.html('禁用');
				obj.parent().siblings('td').eq(10).css('color','#343434');
			}
		});
	});

	//更多筛选
	$('.more').click(function(){
		var mStatus = $('.hl').css('display');
		if(mStatus == 'none'){
			$('.hl').slideDown();
			$(this).html('收起<span class="fold"></span>');
		}
		else{
			$('.hl').slideUp();
			$(this).html('更多筛选<span class="unfold"></span>');
		}
	});

	//更多展开
	$('.check .dMore ul li').each(function(){
		var tLen = $(this).length,
			index = $(this).index();
		if(index > 15){
			$(this).hide();
		}
	});
	$('.btn-more').on('click',function(){
		$(this).siblings('ul').find('li').show();
	});

	//考核指标
	$('.chTable tbody tr').each(function(){

		$(this).find('td').eq(6).children().eq(1).click(function(){
			var obj = $(this);
			if(obj.text() == '禁用'){
				obj.parent().siblings('td').eq(5).html('禁用');
				obj.html('启用');
			}
			else{
				obj.parent().siblings('td').eq(5).html('正常');
				obj.html('禁用');
			}
		});
	});

	//考核指标-指标类型管理
	$('.icon-add').click(function(){
		var addHtml = '<div class="addBlock">'+
						'<dl>'+
							'<dd>'+
								'<label class="red">*</label>'+
								'<label class="name">类型名称</label>'+
								'<div class="bc" style="margin-left:10px;">'+
									'<input type="text" >'+
								'</div>'+
							'</dd>'+
							'<dd>'+
								'<label class="red">*</label>'+
								'<label class="name">单位</label>'+
								'<div class="bc" style="margin-left:10px;">'+
									'<span class="us"></span>'+
									'<select>'+
										'<option selected="selected">请选择</option>'+
										'<option>元</option>'+
										'<option>%</option>'+
									'</select>'+
									'<span class="arrow"></span>'+
								'</div>'+
							'</dd>'+
						'</dl>'+
					'</div>';
		$('.addTarget').append(addHtml);
		addT();
	});
	//取消
	$('.btn-cancel').on('click',function(){
		$('.addBlock').each(function(){
			var index = $(this).index();
			if(index > 0){
				$(this).remove();
			}else{
				$('.bc input').val('');
				$('.bc select').find('option').eq(0).attr('selected','selected');
			}
		});
		$('.target').hide();
	});
	//关闭弹窗
	$('.close').click(function(){
		$('.addBlock').each(function(){
			var index = $(this).index();
			if(index > 0){
				$(this).remove();
			}else{
				$('.bc input').val('');
				$('.bc select').find('option').eq(0).attr('selected','selected');
			}
		});
		$('.target').hide();
	});
	//禁用or启用
	$('.targetT tbody tr').each(function(){

		$(this).find('td').eq(3).children().eq(1).click(function(){
			var obj = $(this);
			if(obj.text() == '禁用'){
				obj.parent().siblings('td').eq(2).html('禁用');
				obj.html('启用');			}
			else{
				obj.parent().siblings('td').eq(2).html('正常');
				obj.html('禁用');
			}
		});
	});
	//编辑
	$('.targetT tbody tr').each(function(){
		$(this).find('td').eq(3).children().eq(0).click(function(){
			if($(this).text() == '编辑'){
				var target = $(this).parent().siblings('td').eq(0).text(),
					unit = $(this).parent().siblings('td').eq(1).text();
				$(this).parent().siblings('td').eq(0).html('<input type="text" value="'+target+'">');
				$(this).parent().siblings('td').eq(1).html('<input type="text" value="'+unit+'">');
				$(this).html('保存');
			}else{
				var tar_ = $(this).parent().siblings('td').eq(0).find('input').val(),
					unit_ = $(this).parent().siblings('td').eq(1).find('input').val();
				$(this).parent().siblings('td').eq(0).html(tar_);
				$(this).parent().siblings('td').eq(1).html(unit_);
				$(this).html('编辑');
			}
			
		});
	});
	function addT(){
		$('.us').html($('.us').siblings('select').find('option:selected').val());
		$('.bc select').change(function() {
			var sVal = $(this).find('option:selected').val();
			$(this).siblings('.us').html(sVal);
		});
	}

	//考核指标-新建指标
	
	//考核指标
	$('.btn-target').on('click',function(){
		if($(this).text() == '选择'){
			$(this).siblings('.targetC').slideDown();
			$(this).html('取消');
		}else{
			$(this).siblings('.targetC').slideUp();
			$(this).html('选择');
		}
	});

	//下拉框
	$('.newT .nt .us').each(function(){
		var usVal = $(this).siblings('select').find('option:selected').val();
		$(this).html(usVal);
	});
	$('.newT .nt select').change(function(){
		var val_ = $(this).find('option:selected').val();
		$(this).siblings('.us').html(val_);
		$(this).parents('.nt').siblings('p').addClass('visibility');
	});

	//完成
	//未选择提示
	$('.btn-submit').click(function(){
		$('.addTarget .nt .us').each(function(){
			if($(this).text() == '请选择'){
				$(this).parents('.nt').siblings('p').removeClass('visibility');
				return false;
			}
		});
	});
});